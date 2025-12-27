import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkDownProps = {
  markdown: string;
};
export function SafeMarkDown({ markdown }: SafeMarkDownProps) {
  return (
    <ReactMarkdown rehypePlugins={[rehypeSanitize]} remarkPlugins={[remarkGfm]}>
      {markdown}
    </ReactMarkdown>
  );
}
