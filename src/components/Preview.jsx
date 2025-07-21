import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

export default function Preview({ content }) {
  useEffect(() => {
    hljs.highlightAll();
  }, [content]);

  useEffect(() => {
    document.querySelectorAll("div[data-filename]").forEach((wrapper) => {
      const filename = wrapper.getAttribute("data-filename");

      const codeBlock = wrapper.querySelector("pre");
      if (!codeBlock || wrapper.querySelector(".code-header")) return;

      wrapper.classList.add(
        "my-2",
        "rounded-lg",
        "overflow-hidden",
        "bg-[#1e1e1e]",
        "border",
        "border-gray-700",
        "relative"
      );

      const header = document.createElement("div");
      header.className =
        "code-header px-4 py-2 bg-gray-800 text-sm text-white font-mono border-b border-gray-700";
      header.innerText = filename;

      wrapper.insertBefore(header, codeBlock);

      const codeEl = codeBlock.querySelector("code");
      const btn = document.createElement("button");
      btn.innerText = "📋 Copy";
      btn.className =
        "copy-btn absolute top-2 right-2 text-xs bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-600";

      btn.onclick = () => {
        navigator.clipboard.writeText(codeEl.innerText);
        btn.innerText = "✅ Copied";
        setTimeout(() => (btn.innerText = "📋 Copy"), 1500);
      };

      wrapper.appendChild(btn);
    });
  }, [content]);

  const cleanedContent = content
    .replace(/<pre><code([^>]*)>\s*\n+/g, "<pre><code$1>")
    .replace(/\n\s*<\/code><\/pre>/g, "</code></pre>");

  return (
    <div
      className="prose prose-invert max-w-full bg-[#0f172a] text-white p-6 rounded-xl"
      dangerouslySetInnerHTML={{ __html: cleanedContent }}
    />
  );
}
