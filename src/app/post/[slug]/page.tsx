import { findPostBySlugCached } from "@/lib/post/queries";

type ParamsProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: ParamsProps) {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);
  return (
    <div>
      <h1>{post?.title}</h1>
    </div>
  );
}
