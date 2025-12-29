import { DrizzlePostRepository } from "../drizzle-post-respository";

import { PostRepository } from "./post-repository";

export const postRepository: PostRepository = new DrizzlePostRepository();
