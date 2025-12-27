import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkDownProps = {
  markdown: string;
};
export function SafeMarkDown({ markdown }: SafeMarkDownProps) {
  return (
    <div className="prose prose-slate w-full max-w-none overflow-hidden prose-a:text-sky-600 prose-a:hover:text-sky-800 prose-a:no-underline prose-a:transition prose-a:hover:underline prose-img:mx-auto lg:prose-lg">
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
