# Face.works — Tools (External Integrations)

Every external tool the tenant world reaches, with auth setup and trust
boundary. Source: `runtime-ports/integration-manifest.yaml`.

**Secret values are never in this file.** Each integration declares a
`SecretRef` pointing into an external secret store. The runtime resolves
secrets at invocation time.

## Integration inventory

### Linear (MCP server)

- **Purpose:** Engagement tracking, pipeline management, stage-gate state
- **Auth:** OAuth — token at `1password:vault/face.works/linear-oauth`
- **Trust boundary:** rent (external SaaS)
- **Scope:** read, write, comment
- **Rate limit:** 60 requests/minute
- **Failover:** Manual escalation to founder if Linear is down > 30 min
- **Used by:** prospect-qualification, engagement-delivery,
  stage-gate-monitoring, engagement-closure, go-to-market-pulse

### GitHub (MCP server)

- **Purpose:** Source of truth for client prototype repos and Facework
  toolkit
- **Auth:** OAuth — token at `1password:vault/face.works/github-oauth`
- **Trust boundary:** rent
- **Scope:** read, write, pr_create, issue_create
- **Rate limit:** 80 requests/minute
- **Failover:** Read-only fallback via local git clone if API is down
- **Used by:** engagement-delivery, engagement-closure, gamut-audit,
  go-to-market-pulse

### Gmail (MCP server)

- **Purpose:** Inbound prospect intake and engagement comms
- **Auth:** OAuth — token at `1password:vault/face.works/gmail-oauth`
- **Trust boundary:** rent
- **Scope:** read, search, send_draft
- **Rate limit:** 30 requests/minute
- **PII:** yes — `data_residency: us`
- **Failover:** Manual prospect intake if Gmail MCP is down
- **Used by:** prospect-qualification

### Notion (MCP server)

- **Purpose:** Long-form client docs and shared workspaces
- **Auth:** OAuth — token at `1password:vault/face.works/notion-oauth`
- **Trust boundary:** rent
- **Scope:** read, write, page_create
- **Rate limit:** 30 requests/minute
- **Failover:** Generate to local markdown if Notion is down — sync later
- **Used by:** engagement-delivery, engagement-closure

### Slack (MCP server)

- **Purpose:** Engagement health alerts and team comms
- **Auth:** OAuth — token at `1password:vault/face.works/slack-oauth`
- **Trust boundary:** rent
- **Scope:** post_message, read_channel
- **Rate limit:** 60 requests/minute
- **Failover:** Skip notification if Slack is down; log to
  `outputs/weekly-status/`
- **Used by:** stage-gate-monitoring

### Twitter / X (REST)

- **Purpose:** Competitor and signal scanning
- **Auth:** API key — at `1password:vault/face.works/x-api-key`
- **Trust boundary:** mitigate (high-volatility platform)
- **Scope:** read_timeline, read_search
- **Rate limit:** 15 requests/minute, 500 requests/day
- **Failover:** Skip social signal section of morning brief if rate-limited
- **Used by:** go-to-market-pulse

### Vault filesystem (local)

- **Purpose:** Local read/write to the Obsidian vault
- **Auth:** local (no auth needed)
- **Trust boundary:** own
- **Scope:** read, write, list
- **Failover:** Hard fail — vault is the source of truth
- **Used by:** all skills

### QMD local search (CLI)

- **Purpose:** Local search index over the vault
- **Auth:** local
- **Trust boundary:** own
- **Scope:** query
- **Failover:** Fall back to grep over `vault/` if QMD index is stale
- **Used by:** engagement-delivery, go-to-market-pulse, gamut-audit

## Setup checklist

For a runtime operator to set up Face.works tools from scratch:

1. Resolve 1Password vault `face.works/` — six OAuth tokens + one API key
2. Install MCP servers for: Linear, GitHub, Gmail, Notion, Slack
3. Configure REST client for Twitter/X with API key
4. Mount the vault filesystem at the project's `vault/` root
5. Install QMD CLI and run initial index over `vault/`
6. Verify each integration with a non-destructive call (e.g., Linear
   `me`, GitHub `/user`, Gmail label list)

## Trust boundary distribution

| Boundary | Count | Integrations |
|---|---|---|
| own | 2 | vault-fs, qmd-index |
| rent | 5 | linear, github, gmail, notion, slack |
| mitigate | 1 | twitter-x |

Sovereignty (PROTOCOL.md Phase 7) requires each `rent` integration to
have a declared mitigation path (above: `failover` field on each).
`mitigate` integrations require an additional sovereignty review — see
the SovereigntyMap artifact.
