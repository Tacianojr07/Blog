import { postRepository } from "@/repositories/post/json-post-repository";
import { cache } from "react";

export const findAllPublicPosts = cache(
  async () => await postRepository.findAllPublic()
);
export const findPostBySlug = cache(
  async (slug: string) => await postRepository.findBySlug(slug)
);
export const findPostById = cache(
  async (id: string) => await postRepository.findById(id)
);
