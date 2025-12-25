import { findPostBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";

type ParamsProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({ params }: ParamsProps) {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);
  return (
    <div>
      <h1>{post?.title}</h1>
    </div>
  );
}
