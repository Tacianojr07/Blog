import { findAllPostAdmin } from "@/lib/post/queries/admin";
import { clsx } from "clsx";
import { Delete, Trash2Icon } from "lucide-react";
import Link from "next/link";
import { DeletePostAdmin } from "../admin/DeletePostAdmin";

export default async function PostsListAdmin() {
  const posts = await findAllPostAdmin();

  return (
    <div className="py-2 px-2">
      {posts.map((post) => {
        return (
          <div
            className={clsx(
              "py-2 px-2",
              !post.published && "bg-slate-300",
              "flex gap-2 items-center justify-between"
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            {!post.published && (
              <span className="text-xs text-slate-600 italic">
                (Não publicado)
              </span>
            )}

            <DeletePostAdmin id={post.id} title={post.title} />
          </div>
        );
      })}
    </div>
  );
}
