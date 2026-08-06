/**
 * Simple markdown renderer for protocol docs.
 * Handles: headings, paragraphs, bold, code blocks, lists, tables, blockquotes.
 * No external dependencies — just string parsing.
 *
 * Styling is the Reading Room "Record" register (DESIGN.md §5/§6): body in
 * Literata, headings in Schibsted, code/table cells in Spline Mono, hairline
 * rules — driven entirely by `.rr-prose` in reading-room.css. Parsing and
 * output structure are unchanged.
 */

import { parseTableRow } from "@/lib/markdown-table";

function renderInline(text: string) {
  const parts = text.split(/(\*\*.*?\*\*|`[^`]+`)/);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="rr-prose__code">
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
        <pre key={elements.length} className="rr-prose__pre">
          <code className={lang ? `language-${lang}` : ""}>
            {codeLines.join("\n")}
          </code>
        </pre>
      );
      continue;
    }

    // Table
    if (line.startsWith("|") && lines[i + 1]?.match(/^\|[\s-:|]+\|/)) {
      const headerCells = parseTableRow(line);
      i += 2; // skip header + separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        rows.push(parseTableRow(lines[i]));
        i++;
      }
      elements.push(
        <div key={elements.length} className="rr-prose__tablewrap">
          <table className="rr-prose__table">
            <thead>
              <tr>
                {headerCells.map((cell, j) => (
                  <th key={j} className="rr-prose__th">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, j) => (
                <tr key={j}>
                  {row.map((cell, k) => (
                    <td key={k} className="rr-prose__td">
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
        <h2 key={elements.length} className="rr-prose__h2">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // Blockquote (single line for now)
    if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={elements.length} className="rr-prose__quote">
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
          <p key={elements.length} className="rr-prose__item">
            <span className="rr-prose__term">{match[1]}</span>
            <span className="rr-prose__detail"> — {match[2]}</span>
          </p>
        );
        i++;
        continue;
      }
    }

    // Simple list item
    if (line.startsWith("- ")) {
      elements.push(
        <p key={elements.length} className="rr-prose__li">
          <span className="rr-prose__bullet" aria-hidden="true">
            ·
          </span>
          <span>{renderInline(line.slice(2))}</span>
        </p>
      );
      i++;
      continue;
    }

    // Standalone bold line
    if (line.startsWith("**") && line.endsWith("**") && !line.includes("**", 2)) {
      elements.push(
        <p key={elements.length} className="rr-prose__strongline">
          {line.slice(2, -2)}
        </p>
      );
      i++;
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      elements.push(<div key={elements.length} className="rr-prose__gap" />);
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={elements.length} className="rr-prose__p">
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return <div className="rr-prose">{elements}</div>;
}
