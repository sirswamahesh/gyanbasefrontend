export function cleanHtmlContent(html) {
  return html
    .replace(/<pre><code([^>]*)>\s*\n+/g, "<pre><code$1>")
    .replace(/\n\s*<\/code><\/pre>/g, "</code></pre>");
}
