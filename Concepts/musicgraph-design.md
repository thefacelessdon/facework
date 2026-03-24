# MusicGraph — Product Design System
**A Private Archive for How Music Has Lived in Your Life**

---

## Core Product Principle

MusicGraph is a **temporal archive**, not a content app.

This means:
- No feeds
- No dashboards
- No profiles
- No "home" that optimizes freshness

Everything is:
- Time-based
- Placement-based
- Intentional

> Navigation is spatial, not behavioral.

---

## Design Philosophy

### Visual Hierarchy
- **Time > Objects > Context**
- Meaning is revealed, never announced
- White space is functional, not aesthetic

### No Gamification
- No progress bars
- No counts
- No streaks
- No badges

### Interaction Rhythm
- Fewer actions per screen
- Fewer confirmations
- Silence is a valid state
- If the user pauses, the system does not intervene

### Language System

**Allowed:** Place · Return · Revisit · Belongs · Mark · Preserve  
**Disallowed:** Complete · Unlock · Finish · "Share your..." · "Discover who you are"

### System States
Every feature must support:
1. Empty
2. Sparse
3. Dense
4. Dormant
5. Returning after years

Most products only design for "active." This system designs for time.

---

## First-Time User Experience (FTUE)

**FTUE has one job:** Establish trust + orientation without extracting identity. No feature selling. No task lists.

### Stage 0 — Pre-Login

**Screen copy:**
> MusicGraph is a private archive for how music has lived in your life.

**Sub-copy:**
> Nothing is public by default. Nothing is ranked. Nothing is assumed.

Login is not required yet.

### Stage 1 — Orientation
Visual: Empty timeline. No dates. No gridlines.

**Copy:**
> Music moves through our lives in eras. Some loud. Some quiet.

Both CTAs carry equal weight: "Add something that mattered" and "I'll come back later."

### Stage 2 — First Action (User-Chosen)
- Option A: Scan an Artifact
- Option B: Add a Song or Album
- Option C: Do Nothing

No option is privileged.

### Stage 3 — Camera (If Chosen)
- Fullscreen
- No filters
- No stickers
- No gallery preview

**Overlay copy:** *Capture something that still holds weight.*

Post-capture: no share, no publish, no reactions.

### Stage 4 — Temporal Placement
**Single prompt:** *When did this live in your life?*

Controls: drag on timeline / "I'm not sure" / Skip. No dates required. Approximation is enough.

### Stage 5 — Context (Optional)
Collapsed by default. Fields: Where were you? Why does this still matter? Zero required fields.

### Stage 6 — Archive Confirmation
**Copy:** *Saved to your archive.*  
**Sub-copy:** *You can return to this anytime.*  
No encouragement to add more.

### Stage 7 — Spotify Connect (Soft Offer)
Appears only after first placement or after user navigates Archive.

**Copy:**
> If you'd like, we can help you remember by importing your listening history.

**Sub-copy:**
> We won't create eras or meanings for you.

Never shown again unless user seeks it out.

### FTUE Complete
No "You're all set." No celebration. The system simply exists.

---

## Archive View

### Purpose (Non-Negotiable)

The Archive View is a **temporal canvas where identity accumulates only through placement**.

It exists to:
- Preserve memory
- Support reflection
- Allow return over years
- Withstand long periods of inactivity

It does **not** exist to:
- Drive engagement
- Display taste
- Encourage sharing
- Surface insights automatically

> If a future feature conflicts with this purpose, the feature is wrong.

### Information Architecture

The Archive View contains only four things:
1. Time
2. Eras (only if declared)
3. Artifacts
4. Quiet affordances

No feeds. No metrics. No profiles. No editorial content. No recommendations.

### Visual System

**Overall:**
- Single scroll axis (horizontal or vertical — pick one, never mix)
- Generous negative space
- Calm, archival palette
- No visual urgency

**Time axis:**
- Time is implied, not ruled
- No gridlines
- No tick marks by default
- Year markers appear only on zoom or intent

**Eras:**
- Appear as soft background fields
- Slight tonal shift with fuzzy boundaries (never hard boxes)
- An era should feel like weather, not a container
- May overlap, may be unnamed, may be open-ended

**Artifacts (default state):**
- Small, calm objects; thumbnails or icons; floating in time
- No metadata visible at rest

> At a glance, the Archive should feel like: "Things resting where they belong."

### Core Interactions (Only Four)
1. Scroll through time
2. Tap artifact
3. Zoom (time scale)
4. Add artifact

No swipes. No long-press menus. No hidden gestures.

**Zoom behavior:** Changes time resolution, not content. Artifacts never resize to become more "important" — only more legible.

---

## Era Behavior

### Visibility States

**State 1 — Implied:** Density only. No label. No boundary. System is silent.

**State 2 — Suggested:** Triggered when multiple artifacts cluster, user lingers in a region, or repeated returns occur.
- Prompt: *"Does this feel like a period in your life?"*
- Options: Name it / Not now / Never ask again here
- No nagging.

**State 3 — Named:** User creates a titled era. Name is user-authored, never system-generated.

**State 4 — Closed:** Era has an end date. Displayed as a completed region. No eulogy prompt.

**State 5 — Open-Ended:** Era has no end. No expiration pressure.

---

## Artifact System

### What an Artifact Is

An artifact is any object that carries personal musical memory. Types:
- Physical objects (vinyl, cassettes, ticket stubs, flyers, notes)
- Digital captures (screenshots, album artwork, scanned items)
- Songs or albums added directly
- Listening history entries (via Spotify)

### Artifact States

| State | Description |
|---|---|
| Placed | Artifact sits on timeline with temporal metadata |
| Unplaced | Artifact exists in archive without time assignment |
| Editorial | Artifact voluntarily contributed to public editorial (never auto-published) |
| Deleted | Artifact removed. No recovery prompt after confirmation. |

### Core Metadata (Minimal)

**Required:**
- Artifact ID
- Type
- Created timestamp

**Optional:**
- Temporal placement (approximate year/range is enough)
- Title or label
- Context note (freeform, no prompts)
- Location (if user offers)
- Era association

**Never auto-generated:**
- Summaries
- Tags
- Mood labels
- Categories

---

## Editorial System

### Principle

Editorial is a **voluntary, curated layer** — separate from the archive. It is public. The archive is private. That boundary is absolute.

**What editorial is:**
- A place where users can share artifacts that carry cultural meaning
- A curated, human-edited surface
- An invitation, never a prompt

**What editorial is not:**
- A feed
- A discovery engine
- A social graph
- A ranking system

### The Contribution Flow

No push. No suggestion. No nudge in the archive. A user who wants to contribute opens Editorial and chooses to submit.

**Contribution gate (mandatory):**
- Explicit opt-in
- User confirms: *"I am choosing to share this. It will be visible publicly."*
- Contribution can be pseudonymous or anonymous

Publishing is a separate cognitive act. The camera never mentions it.

---

## Camera Design
*(Artifact capture, not expression)*

### Purpose (Non-Negotiable)

The camera exists to convert physical artifacts into stable cultural objects.

It exists to:
- Capture ephemera without performance
- Preserve material reality (texture, wear, imperfection)
- Feed the archive with minimal interpretation

It does **not** exist to:
- Express identity
- Tell stories
- Create content
- Capture moments
- Encourage creativity

> If it feels fun, fast, or expressive, it's wrong.

### Camera Philosophy

> The camera is a scanner, not a lens.

It behaves like a flatbed scanner, a document camera, an archivist's tool — not like Instagram, Snapchat, or TikTok. This distinction must be felt immediately.

### Entry Points (Intent-Only)

Camera can only be opened from:
- Archive View → Add Artifact
- Editorial → Add an artifact
- Listening Path → Place an artifact

Never from: Home, floating buttons, gestural shortcuts, or lock screen. Capture must be intentional.

### Camera Modes

**Mode A — Flat Artifact** (Default)  
For: Ticket stubs, flyers, notes, album sleeves, printed matter, screenshots.  
Behavior: Auto-flattening, edge detection, perspective correction, no color enhancement, no sharpening.  
Goal: Faithful reproduction, not beauty.

**Mode B — Object in Space** (Secondary, explicit toggle)  
For: Cassette tapes, CDs, vinyl, personal objects.  
Behavior: Fixed focal length, no depth blur, no cinematic framing, no background isolation.  
Object is documented, not aestheticized.

### Explicitly Excluded Features (Lock This List)

The camera will never include: filters, stickers, text overlays, drawing tools, portrait mode, burst mode, video, live photos, sound, or flash by default.

> If any appear, performance has entered the system.

### Post-Capture Screen

After capture, the user sees:
- **[A]** Artifact Image
- **[B]** Placement (time)
- **[C]** Context (optional)
- **[D]** Save

Nothing else.

**Image display note:** Full-frame, no auto-cropping unless confirmed.  
**Copy beneath image:** *Imperfection is expected.* — This kills redo anxiety.

**Time prompt:** *When did this live?* This is the only required metadata.

**Save button:** "Place in archive" — no success animation, no share prompt, no next-step suggestion. System returns to Archive View quietly.

### Camera Invariant

> The camera must never ask the user who they are, what they feel, or why this matters. It only asks: *When did this live?*

---

## Listening Path

### Purpose

The Listening Path is MusicGraph's active listening mode. It is not a player. It is not a recommendation engine.

It is a **temporally aware listening interface** that creates conditions for intentional placement.

### Design Rules

- No autoplay beyond the current session
- No shuffle (default off, user-enabled only)
- No "you might also like"
- No listening history automatically saved (user opts in)
- Playback ends when the user leaves — no background play by default

---

## Data Sovereignty & Privacy

### Core Principle

> The user owns everything they place.

Rules:
- No data sold
- No behavioral profiling
- No advertising
- No training on user archive data
- Editorial contributions (if made) are governed by a separate, explicit agreement

### What MusicGraph Never Does

- Infer meaning from your archive
- Generate personality profiles
- Connect your archive to your social graph
- Use your data to train models or personalize outside your session
- Sell, rent, or share data with third parties

---

## Legacy / Preservation Export

### Principle

A user must be able to delete their account and still possess the full meaning of what they made.

> Anything less is extraction.

### Export Format

Human-readable, device-independent files:
- Artifact images (original quality, original filenames)
- Timeline data as plain JSON with ISO 8601 dates
- Context notes as UTF-8 text
- Era definitions as structured data
- Optional: listening history CSV

### Contribution Attribution Options

- Full name
- Pseudonym
- Anonymous

### What Export Will Never Include (Lock This List)

- Auto-generated summaries
- Identity narratives
- "Your journey" language
- Recommendations
- Social graphs
- Usage stats
- Engagement metrics

> If any appear, trust is broken.

### Edge Cases

| Scenario | Resolution |
|---|---|
| Company shuts down | Export remains valid. Files open locally. No dependencies. |
| User passes away | Archive can be handed down. Human-readable. No account required. |
| User returns years later | Import possible (future). No degradation. |

---

## What This Is

MusicGraph is the opposite of a platform.

It's an archive that happens to be alive.
