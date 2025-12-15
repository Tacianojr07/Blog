import { Header } from "@/components/Header";
import { Container } from "../components/Container";
import PostList from "@/components/PostList";
import { Suspense } from "react";
import { SpinLoader } from "@/components/SpinLoader";
import Link from "next/link";
import Image from "next/image";
import { PostHeading } from "@/components/PostHeading";
import { PostCoverImage } from "@/components/PostCoverImage";

export default async function Home() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href: "/",
          }}
          imageProps={{
            width: 1200,
            height: 700,
            src: "/images/bryen_9.png",
            alt: "bryen",
            priority: true,
          }}
        />

        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 text-sm/tight " dateTime="2025-02-22">
            {" "}
            2025-02-22
          </time>

          <PostHeading as="h1" url="#">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
            facere accusamus praesentium veritatis tenetur quis eaque
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer className="text-6xl text-slate-800 font-bold py-8 text-center">
        footer
      </footer>
    </Container>
  );
}
