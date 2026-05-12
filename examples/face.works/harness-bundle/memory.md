# Face.works — Memory (Vault Structure)

The Face.works tenant world stores long-term knowledge in a markdown
vault. This file is the navigation contract — what lives where, how it
gets indexed, and the conventions skills follow.

**Boundary against runtime memory:** see `boundary.md`. Read that file
FIRST. The rule in there governs which writes go to the vault vs which
go to Claude's runtime memory.

## Root

The vault root is `vault/` relative to the Face.works project root.

## Structure

```
vault/
├── raw/                       Inbox / staging — unprocessed signal
├── wiki/                      Codified knowledge (LLM-maintained)
│   ├── prospects/             Per-prospect intake + qualification
│   ├── clients/               Active engagements (define + prototype)
│   ├── audits/                GAMUT audits as proof artifacts
│   ├── protocol-reference/    Facework Protocol reference materials
│   ├── competitors/           Competitor + adjacent-space tracking
│   └── case-studies/          Completed engagements as case studies
├── outputs/                   Generated artifacts ready to share
│   ├── morning-brief/         Daily pipeline briefs
│   └── weekly-status/         Weekly engagement health reports
├── archive/                   Closed engagements + aged raw captures
│   ├── clients/               Closed engagements by year
│   └── raw/                   Aged raw captures by year/month
└── _index/                    LLM-maintained TOC and cross-reference
```

## Indexing

The vault has two layered indexes for fast retrieval:

| Folder | Tool | Scope | Refresh |
|---|---|---|---|
| `wiki/` | QMD | recursive | on write |
| `outputs/` | QMD | recursive | every 6 hours (cron) |

QMD (a local search index) sits on top of the markdown files. Skills
query the index via the `qmd-index` integration (see `tools.md`).

## Retention

| Path | Policy | After | Target |
|---|---|---|---|
| `raw/` | archive | 30 days | `archive/raw/{yyyy}/{mm}/` |
| `outputs/morning-brief/` | archive | 90 days | `archive/morning-brief/{yyyy}/{mm}/` |
| `wiki/clients/` | keep forever | — | — |
| `wiki/audits/` | keep forever | — | — |

## Conventions

- **Filename:** kebab-case (`prospect-qualification.md`, not
  `prospectQualification.md` or `Prospect_Qualification.md`)
- **Frontmatter:** YAML, with required keys `title`, `created_at`,
  `source`
- **Link style:** wikilink (`[[wiki/clients/acme]]`)
- **Date format:** ISO 8601 (`2026-05-12`)

## How skills read and write

See `skills/` for per-skill memory access. Patterns are declared in each
skill's "Dependencies" section.

Path templating: skill paths use `{var}` placeholders that runtimes
resolve at invocation (e.g., `wiki/clients/{client_id}/handoff/`).
Resolution order is skill inputs → built-in date variables (`{yyyy}`,
`{mm}`, `{dd}`, `{yyyy-mm-dd}`, `{ww}`) → glob patterns (`*`, `**`).
See PROTOCOL.md §9 "Path templating" for the full spec.
