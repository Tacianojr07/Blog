type ErrorMessageProps = {
  pageTitle?: string;
  content: string;
  contentTitle: string;
};
export function ErroMessage({
  pageTitle = "",
  content,
  contentTitle,
}: ErrorMessageProps) {
  return (
    <>
      {pageTitle && <title>{pageTitle}</title>}
      <div className="min-h-80 bg-slate-900 text-slate-200 p-8 mb-16 rounded-xl flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold mb-4">{contentTitle}</h1>
          <div className="text-xl">{content}</div>
        </div>
      </div>
    </>
  );
}
