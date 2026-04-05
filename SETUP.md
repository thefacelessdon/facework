# Setup Guide

Get from zero to ready-to-run-the-protocol. Everything here is sequenced
by when you actually need it — not everything is needed on day one.

If you've never worked from the terminal before, start at the very top.
If you already have Git and Node installed, skip to what you're missing.

---

## Ground Zero: How Your Computer Actually Works

Before installing anything, you need to understand three things.

### What is a terminal?

A terminal is a text window where you type commands and your computer
executes them. Everything you do by clicking around in Finder or File
Explorer — creating folders, moving files, running programs — can be
done faster by typing commands.

The protocol runs entirely in the terminal. You type a command, the
AI responds, you answer questions, it builds things. Think of it as
a conversation with your computer instead of clicking through menus.

### What is a directory (folder)?

A directory is just a folder. When you see `/Users/you/projects/my-thing`,
that's a path — it tells the computer exactly where something is. The `/`
separates folders, like a street address.

- `~` means your home folder (e.g. `/Users/you` on Mac, `/home/you` on Linux)
- `.` means "right here" — the folder you're currently in
- `..` means "one level up" — the parent folder

### Essential commands (the only ones you need to start)

```bash
pwd                     # "print working directory" — where am I right now?
ls                      # list what's in this folder
cd projects             # move into the "projects" folder
cd ..                   # move back up one level
cd ~                    # go home
mkdir my-project        # create a new folder called "my-project"
```

That's it. You'll learn more as you go, but these six commands are enough
to navigate.

---

## Tier 1: Before You Start (Required for all projects)

These are needed before running any protocol phase. Set them up first.

### 1. Terminal

**Mac:** Terminal.app is built in. Open it from Spotlight (Cmd + Space → type
"Terminal" → press Enter). You'll see a window with a blinking cursor. That's it.

**Windows:** Install [Windows Terminal](https://aka.ms/terminal) from the Microsoft Store,
then install [WSL 2](https://learn.microsoft.com/en-us/windows/wsl/install) (Windows
Subsystem for Linux) — open PowerShell as admin and run `wsl --install`. This gives you
a real Linux environment inside Windows. After restart, open Windows Terminal and
select the Ubuntu tab.

Verify: type `echo hello` and press Enter. If you see `hello`, you're good.

### 2. Git + GitHub

Git tracks every change to your project. GitHub stores it in the cloud and
makes collaboration possible.

**Install Git:**
- Mac: `xcode-select --install` (installs Git along with developer tools)
- Windows/WSL: `sudo apt update && sudo apt install git`

**Create a GitHub account:** [github.com](https://github.com) → Sign up.
Use a real email you check. Pick a username you'd put on a business card.

**Configure Git** (replace with your info):
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

**Set up SSH key** (so you don't type passwords every time):
```bash
ssh-keygen -t ed25519 -C "you@example.com"
# Press Enter through all prompts (default location, no passphrase is fine to start)
cat ~/.ssh/id_ed25519.pub
# Copy the output
```
Go to [github.com/settings/keys](https://github.com/settings/keys) → New SSH key →
paste it → Save.

Verify: `ssh -T git@github.com` → should say "Hi [username]! You've successfully authenticated."

### 3. Code Editor

You need somewhere to read and edit code. The protocol runs in the terminal,
but you'll want an editor open alongside it.

**Recommended:** [Cursor](https://cursor.com) (AI-native editor, built on VS Code)
or [VS Code](https://code.visualstudio.com).

Install, then add the terminal shortcut:
- Open the editor → Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows) →
  "Shell Command: Install 'code' command in PATH" (or 'cursor' for Cursor)

Verify: `cursor .` or `code .` from terminal opens the editor in the current folder.

### 4. Node.js

Most project tooling runs on Node. Install it with a version manager so you
can switch versions later if needed.

```bash
# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Close and reopen your terminal, then:
nvm install --lts
```

Verify: `node --version` → should show a version number (v20+ recommended).

### 5. Claude Code

This is how the protocol runs. Claude Code is the AI agent that executes
each protocol phase with you.

```bash
npm install -g @anthropic-ai/claude-code
```

You'll need an Anthropic API key or a Claude subscription.
- **With Claude Max subscription:** Just run `claude` and sign in when prompted.
- **With API key:** Get one from [console.anthropic.com](https://console.anthropic.com) →
  API Keys → Create Key. Then:
  ```bash
  export ANTHROPIC_API_KEY="your-key-here"
  ```
  Add that line to your `~/.zshrc` (Mac) or `~/.bashrc` (Linux/WSL) so it persists.

Verify: `claude --version` → should show a version number.

### 6. Create Your Project

Your project needs a home on your computer — a folder where everything lives.
All the files the protocol creates (strategy docs, architecture specs, code)
go here. Git tracks the history. GitHub backs it up to the cloud.

**Step 1: Create a projects folder** (you only do this once, ever):
```bash
cd ~
mkdir projects
```

This creates a `projects` folder in your home directory. All your projects
will live here.

**Step 2: Create your project folder:**
```bash
cd ~/projects
mkdir my-project-name
cd my-project-name
```

Replace `my-project-name` with the actual name. Use lowercase, hyphens
instead of spaces (e.g. `club-volley`, `hue-unlimited`, `my-studio`).

**Step 3: Initialize it as a Git repo:**
```bash
git init
```

This tells Git to start tracking changes in this folder. You'll see
"Initialized empty Git repository."

**Step 4: Connect it to GitHub:**

Go to [github.com/new](https://github.com/new) → name it the same as your
folder → **don't** check any boxes (no README, no .gitignore) → Create repository.

GitHub will show you commands. Run the ones under "push an existing repository":
```bash
git remote add origin git@github.com:yourusername/my-project-name.git
git branch -M main
```

**Step 5: Start the protocol:**
```bash
claude
```

You're now in Claude Code inside your project. This is where the protocol runs.

---

## Tier 2: Before Building (Needed by Phase 5–6)

These are needed when you start building architecture and interfaces.
Set them up after completing the strategy phases (Phases 1–4), or whenever
your project track requires them.

### Deployment — Vercel

Vercel deploys your site/app to the internet. Most protocol projects use it.

1. Create account: [vercel.com](https://vercel.com) → Sign up with GitHub
   (this connects them automatically).
2. Install CLI:
   ```bash
   npm install -g vercel
   vercel login
   ```

Verify: `vercel --version` → version number shown, and you're logged in.

**When you need it:** Before Resonance (Phase 6) when building interfaces.

### Database — Supabase

Supabase provides a hosted PostgreSQL database with auth, storage, and APIs.
Needed for Platform/Product projects. Creator/Brand projects often use
platform APIs (Shopify, etc.) instead.

1. Create account: [supabase.com](https://supabase.com) → Sign up with GitHub.
2. Create a new project → pick a region close to your users → save the
   database password somewhere safe.
3. Install CLI:
   ```bash
   npm install -g supabase
   supabase login
   ```

Verify: `supabase --version` → version number shown.

**When you need it:** During Stability (Phase 5) for Platform/Product track
projects that need a real database.

### Domain Name

Your project needs an address on the internet. Buy a domain before launch.

**Recommended registrars:** [Namecheap](https://namecheap.com),
[Cloudflare Registrar](https://dash.cloudflare.com), or
[Google Domains → Squarespace](https://domains.squarespace.com).

Don't overthink the name early. You can always change it. The protocol's
Semantics phase will have clarified what the thing is called.

**When you need it:** Before deploying interfaces publicly (late Phase 6
or after).

---

## Tier 3: Contextual (Depends on your project)

These are needed based on what kind of project you're building. Your
protocol track determines which ones apply.

### Commerce — Stripe

If your project involves payments (selling products, subscriptions,
splitting revenue).

1. Create account: [stripe.com](https://stripe.com) → Sign up.
2. Get API keys: Dashboard → Developers → API keys.
   Start with **test mode** keys (toggle in the dashboard).
3. Install CLI:
   ```bash
   npm install -g stripe
   stripe login
   ```

**Tracks that typically need this:** Creator (selling direct), Cultural Brand
(commerce), Platform (payment infrastructure).

### Commerce — Shopify

If the project sells physical or digital products through a storefront.

1. Create account: [shopify.com](https://shopify.com) → Start free trial
   or use [Shopify Partners](https://partners.shopify.com) for a dev store.
2. For API access: Settings → Apps → Develop apps → Create an app →
   configure scopes based on what you need.

**Tracks that typically need this:** Creator (merch, products), Cultural Brand
(storefront), Athlete (merch).

### CMS — Sanity

If the project needs structured content management (editorial, portfolio,
dynamic pages).

1. Create account: [sanity.io](https://sanity.io) → Sign up.
2. Install CLI:
   ```bash
   npm install -g @sanity/cli
   sanity login
   ```

**Tracks that typically need this:** Cultural Brand (editorial), Agency/Studio
(client content), Creator (portfolio/blog).

### Email — ConvertKit / Resend

If the project sends emails (newsletters, sequences, transactional).

- **ConvertKit** ([kit.com](https://kit.com)): For creator newsletters and
  audience building. Sign up → get API key from Settings → Advanced.
- **Resend** ([resend.com](https://resend.com)): For transactional email
  (receipts, notifications). Sign up → get API key → verify your domain.

**Tracks that typically need this:** Creator (audience), Cultural Brand
(editorial distribution), Platform (transactional).

### Design — Figma

If the project involves visual design work, component libraries, or
design-to-code workflows.

1. Create account: [figma.com](https://figma.com) → Sign up (free tier works).
2. No CLI needed — Figma works through the browser and the MCP integration
   in Claude Code.

**Tracks that typically need this:** Cultural Brand (brand system), Agency/Studio
(client design), any project with significant visual identity work.

### Analytics — Plausible / PostHog

If you need to understand how people use the thing you built.

- **Plausible** ([plausible.io](https://plausible.io)): Privacy-friendly,
  simple. Good for public sites.
- **PostHog** ([posthog.com](https://posthog.com)): Full product analytics
  + session replay. Good for apps.

**When you need it:** After interfaces are live and you're measuring
(post-Phase 6, or during Beta stage).

---

## Verification Checklist

Run through this before starting the protocol to confirm everything works:

```
[ ] Terminal opens and responds to commands
[ ] git --version shows a version number
[ ] GitHub account created and SSH key works (ssh -T git@github.com)
[ ] Code editor opens from terminal (cursor . or code .)
[ ] node --version shows v20+
[ ] claude --version shows a version number
[ ] Project directory created with git init
```

Everything above? You're ready to run `/fw-semantics`.

The Tier 2 and Tier 3 tools can be set up as you reach the phases that
need them. `/fw-semantics` will detect your project track and tell you
what you'll need and when.

---

## Troubleshooting

**"command not found" after installing something:**
Close your terminal and reopen it. Most installs update your shell config,
which only loads on a new session.

**SSH key issues with GitHub:**
Make sure you copied the `.pub` file (the public key), not the private key.
Run `cat ~/.ssh/id_ed25519.pub` and copy the entire output including `ssh-ed25519`.

**Node/npm permission errors:**
If you get `EACCES` errors, you probably installed Node without nvm. Uninstall
the system Node and reinstall via nvm (see Tier 1 step 4).

**Claude Code won't start:**
Check that your API key is set: `echo $ANTHROPIC_API_KEY` should show your key.
If blank, add it to your shell config and restart the terminal.

**"Git push rejected":**
You probably need to create the repo on GitHub first. Go to github.com →
New repository → create it → then follow the instructions to push an existing repo.
