"use client";
import { deletePostAction } from "@/actions/post/delete-post-action";
import { clsx } from "clsx";
import { Trash2Icon } from "lucide-react";
import { useTransition } from "react";

type DeletePostAdminProps = {
  id: string;
  title: string;
};
export function DeletePostAdmin({ id, title }: DeletePostAdminProps) {
  const [isPeding, startTransition] = useTransition();

  async function handleDeletePost() {
    startTransition(async () => {
      const result = await deletePostAction(id);

      alert(result);
    });
  }

  return (
    <button
      className={clsx(
        "text-red-500 cursor-pointer transition",
        "[&_svg]:w-4 [&_svg]:h-4",
        "hover:scale-120 hover:text-red-700",
        "disabled:text-slate-400 disabled:cursor-not-allowed"
      )}
      aria-label={`Apagar post: ${title}`}
      title={`Apagar post: ${title}`}
      onClick={handleDeletePost}
      disabled={isPeding}
    >
      <Trash2Icon />
    </button>
  );
}
