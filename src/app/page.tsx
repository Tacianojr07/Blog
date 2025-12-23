import PostList from "@/components/PostList";
import { Suspense } from "react";
import { SpinLoader } from "@/components/SpinLoader";
import { PostFeatured } from "@/components/PostFeatured";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
    </>
  );
}
