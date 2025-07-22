"use client";

import { useEffect } from "react";
import useCodeHighlighter from "./useCodeHighlighter";
import { cleanHtmlContent } from "./utils";

export default function Preview({ content }) {
  useCodeHighlighter(content);

  return (
    <div
      className="prose prose-invert max-w-full bg-black text-gray-100 p-8 rounded-xl border border-gray-800 shadow-2xl"
      style={{
        "--tw-prose-body": "#f3f4f6",
        "--tw-prose-headings": "#ffffff",
        "--tw-prose-lead": "#d1d5db",
        "--tw-prose-links": "#10b981",
        "--tw-prose-bold": "#ffffff",
        "--tw-prose-counters": "#9ca3af",
        "--tw-prose-bullets": "#6b7280",
        "--tw-prose-hr": "#374151",
        "--tw-prose-quotes": "#f3f4f6",
        "--tw-prose-quote-borders": "#10b981",
        "--tw-prose-captions": "#9ca3af",
        "--tw-prose-code": "#10b981",
        "--tw-prose-pre-code": "#f3f4f6",
        "--tw-prose-pre-bg": "#111827",
        "--tw-prose-th-borders": "#374151",
        "--tw-prose-td-borders": "#374151",
      }}
      dangerouslySetInnerHTML={{ __html: cleanHtmlContent(content) }}
    />
  );
}
