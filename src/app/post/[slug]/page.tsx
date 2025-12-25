import { postRepository } from "@/repositories/post";
import { notFound } from "next/navigation";

type ParamsProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: ParamsProps) {
  const { slug } = await params;

  let post;
  try {
    post = await postRepository.findBySlug(slug);
  } catch {
    post = undefined;
  }

  if (!post) notFound();

  return (
    <div>
      <h1>{post?.title}</h1>
    </div>
  );
}
