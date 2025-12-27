import { ErroMessage } from "@/components/ErrorMessage";

export default function NotFound() {
  return (
    <>
      <ErroMessage
        pageTitle="Página não encontrada"
        content="ERROR 404 - Esta página que você tentou acessar não foi encontrada."
        contentTitle="404"
      />
    </>
  );
}
