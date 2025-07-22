import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

export default function useCodeHighlighter(content) {
  useEffect(() => {
    hljs.highlightAll();
  }, [content]);

  useEffect(() => {
    document.querySelectorAll("div[data-filename]").forEach((wrapper) => {
      const filename = wrapper.getAttribute("data-filename");
      const codeBlock = wrapper.querySelector("pre");
      if (!codeBlock || wrapper.querySelector(".code-header")) return;

      wrapper.classList.add(
        "my-4",
        "rounded-xl",
        "overflow-hidden",
        "bg-gray-950",
        "border",
        "border-gray-800",
        "relative",
        "shadow-lg"
      );

      const header = document.createElement("div");
      header.className =
        "code-header px-4 py-3 bg-gray-900 text-sm text-gray-300 font-mono border-b border-gray-800 flex items-center justify-between";

      const fileInfo = document.createElement("div");
      fileInfo.className = "flex items-center space-x-2";

      const fileIcon = document.createElement("span");
      fileIcon.className = "text-green-400";
      fileIcon.innerText = "📄";

      const fileName = document.createElement("span");
      fileName.innerText = filename;
      fileName.className = "text-white font-medium";

      fileInfo.appendChild(fileIcon);
      fileInfo.appendChild(fileName);
      header.appendChild(fileInfo);

      const controls = document.createElement("div");
      controls.className = "flex space-x-2";

      ["red", "yellow", "green"].forEach((color) => {
        const dot = document.createElement("div");
        dot.className = `w-3 h-3 bg-${color}-500 rounded-full`;
        controls.appendChild(dot);
      });

      header.appendChild(controls);
      wrapper.insertBefore(header, codeBlock);

      codeBlock.className =
        "bg-gray-950 text-gray-100 p-4 overflow-x-auto text-sm font-mono leading-relaxed";

      const codeEl = codeBlock.querySelector("code");

      const btn = document.createElement("button");
      btn.innerText = "📋 Copy";
      btn.className =
        "copy-btn absolute top-3 right-3 text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200 border border-gray-700 font-medium";

      btn.onclick = () => {
        navigator.clipboard.writeText(codeEl.innerText);
        btn.innerText = "✅ Copied";
        btn.className = btn.className
          .replace("bg-gray-800", "bg-green-600")
          .replace("text-gray-300", "text-black");

        setTimeout(() => {
          btn.innerText = "📋 Copy";
          btn.className = btn.className
            .replace("bg-green-600", "bg-gray-800")
            .replace("text-black", "text-gray-300");
        }, 1500);
      };

      wrapper.appendChild(btn);
    });
  }, [content]);
}
