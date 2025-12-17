import { postRepository } from "@/repositories/post/json-post-repository";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { formatDatetime, formatDistanceToNow } from "@/utils/format-datetime";
import { PostSummary } from "../PostSummary";

export default async function PostList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1   gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className="flex flex-col  group gap-4" key={post.id}>
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                width: 1200,
                height: 700,
                src: post.coverImageUrl,
                alt: post.title,
                priority: true,
              }}
            />
            <PostSummary
              postLink={postLink}
              postHeading="h2"
              title={post.title}
              createdAt={post.createdAt}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </div>
  );
}
