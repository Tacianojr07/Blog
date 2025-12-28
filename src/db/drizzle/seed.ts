import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    drizzleDb.delete(postsTable).run();
    drizzleDb.insert(postsTable).values(posts).run();

    console.log(`${posts.length} posts foram salvos na base de dados.`);
  } catch (e) {
    console.error("Ocorreu um erro no seed:", e);
  }
})();
