import { drizzleDb } from "@/db/drizzle";
import { PostModel } from "@/models/post/post.model";
import { PostRepository } from "./post/post-repository";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    console.log("\n", " D findAllPublic", "\n");
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    console.log("\n", "D findBySlugPublic", "\n");
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.slug, slug),
    });

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  }
  async findAll(): Promise<PostModel[]> {
    console.log("\n", "D findAll", "\n");
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    console.log("\n", " D findById", "\n");
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  }
}
