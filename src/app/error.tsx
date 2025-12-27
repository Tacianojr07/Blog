"use client";
import { ErroMessage } from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};
export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <ErroMessage
        pageTitle="Internal Server Error"
        content="ERROR 501 - Ocorreu um erro interno no servidor. Tente novamente mais tarde."
        contentTitle="501"
      />
    </>
  );
}
