import { Header } from "@/components/Header";
import { Container } from "../components/Container";
import PostList from "@/components/PostList";
import { Suspense } from "react";
import { SpinLoader } from "@/components/SpinLoader";
import { PostFeatured } from "@/components/PostFeatured";

export default async function Home() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer className="text-6xl text-slate-800 font-bold py-8 text-center">
        footer
      </footer>
    </Container>
  );
}
