/**
 * Markdown renderer for the canonical protocol docs.
 * No external dependencies — parsing lives in src/lib/markdown-blocks.ts
 * (pure, vitest-covered); this component owns only the element tree.
 *
 * Styling is the Reading Room "Record" register (DESIGN.md §5/§6): body in
 * Literata, headings in Schibsted, code/table cells in Spline Mono, hairline
 * rules — driven entirely by `.rr-prose` in reading-room.css.
 *
 * Grown from the excerpt-era renderer to carry the FULL canon files:
 * h3/h4, horizontal rules, ordered/nested lists, multi-line blockquotes
 * (with tables inside), links (canon-relative links resolve to site routes;
 * unresolvable targets render as plain text, never dead links), *emphasis*.
 */

import Link from "next/link";
import {
  parseBlocks,
  parseInline,
  resolveCanonHref,
  type Block,
  type InlineToken,
} from "@/lib/markdown-blocks";

function renderTokens(tokens: InlineToken[]): React.ReactNode[] {
  return tokens.map((token, i) => {
    switch (token.type) {
      case "strong":
        return <strong key={i}>{renderTokens(token.children)}</strong>;
      case "em":
        return <em key={i}>{renderTokens(token.children)}</em>;
      case "code":
        return (
          <code key={i} className="rr-prose__code">
            {token.text}
          </code>
        );
      case "link": {
        const href = resolveCanonHref(token.href);
        if (!href) return <span key={i}>{renderTokens(token.children)}</span>;
        if (href.startsWith("/")) {
          return (
            <Link key={i} href={href}>
              {renderTokens(token.children)}
            </Link>
          );
        }
        return (
          <a key={i} href={href} rel="noreferrer">
            {renderTokens(token.children)}
          </a>
        );
      }
      default:
        return <span key={i}>{token.text}</span>;
    }
  });
}

function renderInline(text: string): React.ReactNode[] {
  return renderTokens(parseInline(text));
}

function renderBlocks(blocks: Block[]): React.ReactNode[] {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "code":
        // tabIndex: wide canon code blocks scroll horizontally
        // (overflow-x: auto), and a scrollable region must be reachable by
        // keyboard (axe: scrollable-region-focusable).
        return (
          <pre key={i} className="rr-prose__pre" tabIndex={0}>
            <code className={block.lang ? `language-${block.lang}` : ""}>
              {block.code}
            </code>
          </pre>
        );
      case "table":
        return (
          <div key={i} className="rr-prose__tablewrap">
            <table className="rr-prose__table">
              <thead>
                <tr>
                  {block.header.map((cell, j) => (
                    <th key={j} className="rr-prose__th">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, j) => (
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
      case "heading": {
        if (block.level === 3) {
          return (
            <h3 key={i} className="rr-prose__h3">
              {renderInline(block.text)}
            </h3>
          );
        }
        if (block.level === 4) {
          return (
            <h4 key={i} className="rr-prose__h4">
              {renderInline(block.text)}
            </h4>
          );
        }
        return (
          <h2 key={i} className="rr-prose__h2">
            {renderInline(block.text)}
          </h2>
        );
      }
      case "quote":
        return (
          <blockquote key={i} className="rr-prose__quote">
            {renderBlocks(block.children)}
          </blockquote>
        );
      case "term-item":
        return (
          <p key={i} className="rr-prose__item">
            <span className="rr-prose__term">{block.term}</span>
            <span className="rr-prose__detail"> — {renderInline(block.detail)}</span>
          </p>
        );
      case "list-item":
        return (
          <p
            key={i}
            className={
              block.nested ? "rr-prose__li rr-prose__li--nested" : "rr-prose__li"
            }
          >
            <span className="rr-prose__bullet" aria-hidden="true">
              {block.marker}
            </span>
            <span>{renderInline(block.text)}</span>
          </p>
        );
      case "strongline":
        return (
          <p key={i} className="rr-prose__strongline">
            {renderInline(block.text)}
          </p>
        );
      case "em-p":
        return (
          <p key={i} className="rr-prose__note">
            <em>{renderInline(block.text)}</em>
          </p>
        );
      case "hr":
        return <hr key={i} className="rr-prose__hr" />;
      case "gap":
        return <div key={i} className="rr-prose__gap" />;
      default:
        return (
          <p key={i} className="rr-prose__p">
            {renderInline(block.text)}
          </p>
        );
    }
  });
}

export function Markdown({ content }: { content: string }) {
  return <div className="rr-prose">{renderBlocks(parseBlocks(content))}</div>;
}
