/**
 * Simple markdown renderer for protocol docs.
 * Handles: headings, paragraphs, bold, code blocks, lists, tables, blockquotes.
 * No external dependencies — just string parsing.
 */

function renderInline(text: string) {
  const parts = text.split(/(\*\*.*?\*\*|`[^`]+`)/);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-foreground font-medium">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="text-clarity text-[0.85em] px-1 py-0.5 bg-surface rounded">
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function Markdown({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <pre
          key={elements.length}
          className="bg-surface border border-border rounded p-4 overflow-x-auto my-6 text-sm leading-relaxed"
        >
          <code className={lang ? `language-${lang}` : ""}>
            {codeLines.join("\n")}
          </code>
        </pre>
      );
      continue;
    }

    // Table
    if (line.startsWith("|") && lines[i + 1]?.match(/^\|[\s-:|]+\|/)) {
      const headerCells = line.split("|").filter(Boolean).map(c => c.trim());
      i += 2; // skip header + separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        rows.push(lines[i].split("|").filter(Boolean).map(c => c.trim()));
        i++;
      }
      elements.push(
        <div key={elements.length} className="overflow-x-auto my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                {headerCells.map((cell, j) => (
                  <th key={j} className="text-left py-2 pr-4 text-muted font-normal text-xs tracking-wide uppercase">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, j) => (
                <tr key={j} className="border-b border-border/50">
                  {row.map((cell, k) => (
                    <td key={k} className="py-2 pr-4 text-muted">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Heading
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={elements.length} className="text-lg font-medium tracking-wide mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // Blockquote (single line for now)
    if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={elements.length} className="border-l-2 border-clarity/40 pl-4 my-4 text-muted italic">
          {renderInline(line.slice(2))}
        </blockquote>
      );
      i++;
      continue;
    }

    // List item (- **Bold** — detail pattern)
    if (line.startsWith("- **")) {
      const match = line.match(/- \*\*(.+?)\*\*\s*[—–-]\s*(.+)/);
      if (match) {
        elements.push(
          <p key={elements.length} className="ml-4 my-2 text-sm">
            <span className="text-foreground font-medium">{match[1]}</span>
            <span className="text-muted"> — {match[2]}</span>
          </p>
        );
        i++;
        continue;
      }
    }

    // Simple list item
    if (line.startsWith("- ")) {
      elements.push(
        <p key={elements.length} className="ml-4 my-1.5 text-sm text-muted flex gap-2">
          <span className="text-muted/50" aria-hidden="true">·</span>
          <span>{renderInline(line.slice(2))}</span>
        </p>
      );
      i++;
      continue;
    }

    // Standalone bold line
    if (line.startsWith("**") && line.endsWith("**") && !line.includes("**", 2)) {
      elements.push(
        <p key={elements.length} className="font-medium mt-6 text-sm">
          {line.slice(2, -2)}
        </p>
      );
      i++;
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      elements.push(<div key={elements.length} className="h-2" />);
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={elements.length} className="text-sm leading-relaxed text-muted">
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return <div className="space-y-1">{elements}</div>;
}
