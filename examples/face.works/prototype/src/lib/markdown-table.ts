/** Split a Markdown table row into trimmed cells, preserving interior empty cells. */
export function parseTableRow(line: string): string[] {
  return line
    .replace(/^\s*\|/, "")   // strip leading pipe
    .replace(/\|\s*$/, "")   // strip trailing pipe
    .split("|")
    .map((c) => c.trim());
}
