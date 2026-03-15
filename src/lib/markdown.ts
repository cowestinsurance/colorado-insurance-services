/** Simple markdown-to-HTML converter for blog posts */

export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3 class="font-serif text-heading-sm text-brand-navy mt-8 mb-3">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="font-serif text-heading text-brand-navy mt-10 mb-4">$1</h2>');

  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(
    /\[(.+?)\]\((.+?)\)/g,
    '<a href="$2" class="text-brand-orange hover:underline">$1</a>'
  );

  // Unordered lists
  html = html.replace(
    /^- (.+)$/gm,
    '<li class="ml-4 pl-2">$1</li>'
  );
  html = html.replace(
    /(<li[^>]*>.*<\/li>\n?)+/g,
    (match) => `<ul class="list-disc space-y-1 my-4">${match}</ul>`
  );

  // Ordered lists
  html = html.replace(
    /^\d+\. (.+)$/gm,
    '<li class="ml-4 pl-2">$1</li>'
  );

  // Blockquotes
  html = html.replace(
    /^> (.+)$/gm,
    '<blockquote class="border-l-4 border-brand-orange pl-4 py-2 my-4 text-neutral-600 italic">$1</blockquote>'
  );

  // Paragraphs — wrap remaining lines that aren't HTML tags
  const lines = html.split("\n");
  const result: string[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed === "" ||
      trimmed.startsWith("<h") ||
      trimmed.startsWith("<ul") ||
      trimmed.startsWith("</ul") ||
      trimmed.startsWith("<ol") ||
      trimmed.startsWith("</ol") ||
      trimmed.startsWith("<li") ||
      trimmed.startsWith("<blockquote") ||
      trimmed.startsWith("<a") ||
      trimmed.startsWith("<div")
    ) {
      result.push(line);
    } else {
      result.push(`<p class="text-body text-neutral-600 font-sans mb-4">${trimmed}</p>`);
    }
  }

  return result.join("\n");
}
