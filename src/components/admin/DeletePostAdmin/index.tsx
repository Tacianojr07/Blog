"use client";
import { deletePostAction } from "@/actions/post/delete-post-action";
import { clsx } from "clsx";
import { Trash2Icon } from "lucide-react";
import { useState, useTransition } from "react";
import Dialog from "../Dialog";

type DeletePostAdminProps = {
  id: string;
  title: string;
};
export function DeletePostAdmin({ id, title }: DeletePostAdminProps) {
  const [isPeding, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);

  function handleDeletePost() {
    setShowDialog(true);
  }

  function handleConfirmDeletePost() {
    startTransition(async () => {
      const result = await deletePostAction(id);
      alert(`vai apagar ${result} ${id}`);
      setShowDialog(false);
    });
  }

  function handleCancelDeletePost() {
    setShowDialog(false);
  }

  return (
    <>
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
      {showDialog && (
        <Dialog
          isVisible={showDialog}
          title="Apagar post"
          content={`Tem certeza que deseja apagar o post: ${title}`}
          onConfirm={handleConfirmDeletePost}
          onCancel={handleCancelDeletePost}
          disabled={isPeding}
        />
      )}
    </>
  );
}
