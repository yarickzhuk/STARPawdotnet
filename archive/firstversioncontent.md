# Starpaw.net — Version 1 Implementation Document

**Document status:** Final  
**Website type:** Static, English-language fan site  
**Public title:** **STARPaw.net**  
**Primary tagline:** **Warrior Cats, dragged through the internet.**

> Documentation citations identify the uploaded source material used to establish content. They are not rendered on the public website.

---

## 1. Product Definition

STARPaw.net is a static English-language fan portal containing four connected sections:

1. **Roasts** — Warrior Cats memes, comics, edits, and fandom satire hosted by Jayfeather.
2. **Files** — character dossiers, mission records, and the Starpaw roleplay timeline.
3. **Atlas** — Project ThunderClan Empire expedition reports.
4. **Herbs** — Jayfeather’s RPG-style medicine-cat item database.

The site treats Warrior Cats as a cast and setting for absurdist internet comedy rather than requiring every page to depend on detailed book lore. The central humor combines Warrior Cats, gaming logic, TF2/GMod-style interruption, fake bureaucracy, and deliberate overengineering. 

---

# 2. Global Navigation

## Desktop header

```text
STARPaw.net

ROASTS
FILES
ATLAS
HERBS
ABOUT
RANDOM
```

- The logo links to `/`.
- `RANDOM` opens one random roast, file, expedition, or herb entry.
- The active section receives a colored underline.
- The header remains sticky after the visitor scrolls 80 pixels.

## Mobile header

```text
[STARPaw.net]                         [MENU]
```

The expanded menu contains:

```text
Home
Roasts
The Starpaw Files
Expedition Atlas
Herb Guide
About This Disaster
Random File
```

## Footer

The following copy appears on every page:

> **STARPaw.net** is a non-commercial fan project inspired by *Warriors*. It is not affiliated with Working Partners, HarperCollins, or the official creators and publishers of the series.  
>  
> Original characters, roleplay continuity, jokes, edits, writing, and site design belong to their respective creators. Canon characters and settings belong to their respective rights holders.  
>  
> **Jayfeather reviewed this footer and found it legally exhausting.**

Footer links:

```text
About
Content Labels
Accessibility
Credits
Back to Top
```

---

# 3. Global Content Labels

Every content page displays one or more labels directly below its title.

| Label | Meaning |
|---|---|
| `CANON REFERENCE` | Uses a character, event, or fandom joke associated with the books |
| `ROLEPLAY` | Part of the Starpaw roleplay continuity |
| `SATIRE` | Written primarily as comedy or commentary |
| `CROSSOVER LOGIC` | Uses gaming, internet, or another fictional universe’s logic |
| `NON-CANON` | Does not belong to the main roleplay continuity |
| `FIELD REPORT` | Project ThunderClan Empire document |
| `ITEM DATABASE` | Entry in the herb and equipment system |
| `SPOILERS` | Contains identifiable book spoilers |
| `CLASSIFIED` | Hidden by default until the visitor reveals it |

Spoilers use this exact control:

```text
This file contains Warrior Cats spoilers.

[REVEAL FILE]
```

---

# 4. Visual System

## 4.1 Global colors

```css
:root {
  --background: #101417;
  --surface: #181e22;
  --surface-raised: #222a2f;
  --surface-paper: #e7dfca;

  --text-primary: #f1eee6;
  --text-secondary: #aeb8bd;
  --text-dark: #24231f;

  --green: #79c98c;
  --blue: #71a8ca;
  --red: #d75b5b;
  --amber: #d5a447;
  --purple: #9476bd;
  --gold: #d1b45f;

  --border: #364047;
  --focus: #f2c94c;
}
```

## 4.2 Section colors

| Section | Primary color |
|---|---|
| Roasts | `#D75B5B` |
| Files | `#79C98C` |
| Atlas | `#D5A447` |
| Herbs | `#9476BD` |

## 4.3 Typography

No external font service is required.

```css
--font-display:
  Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

--font-body:
  Inter, ui-sans-serif, system-ui, -apple-system,
  BlinkMacSystemFont, "Segoe UI", sans-serif;

--font-mono:
  "Courier New", Courier, monospace;
```

### Type scale

```css
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.25rem;
--text-xl: 1.75rem;
--text-2xl: 2.5rem;
--text-hero: clamp(3rem, 9vw, 7rem);
```

## 4.4 Layout

- Maximum content width: `1200px`
- Reading-column width: `720px`
- Desktop horizontal padding: `32px`
- Mobile horizontal padding: `18px`
- Standard card radius: `4px`
- Buttons use square or lightly rounded corners.
- Shadows remain subtle and dark.
- Borders use `1px solid var(--border)`.

## 4.5 Breakpoints

```css
@media (max-width: 767px)  { /* mobile */ }
@media (min-width: 768px)  { /* tablet */ }
@media (min-width: 1100px) { /* desktop */ }
```

## 4.6 Images and illustrations

Version 1 uses:

- credited existing meme images where supplied;
- HTML/CSS comic panels;
- simple monochrome SVG icons;
- geometric cat silhouettes;
- no AI-generated character art;
- no uncredited fan art.

The rough visual style is intentional. The governing rule is:

> **Animation quality: questionable. Timing of the joke: maximum effort.**

This reflects the established project philosophy of prioritizing humor over visual complexity. 

## 4.7 Motion

Allowed effects:

- `120ms` button press;
- `180ms` card hover;
- one short screen shake on designated joke controls;
- instant redaction reveal;
- no background parallax;
- no autoplay audio;
- no continuous animation.

All non-essential motion is disabled when `prefers-reduced-motion: reduce` is active.

---

# 5. Route Manifest

```text
/
├── index.html
├── 404.html
├── about/
│   ├── index.html
│   ├── labels.html
│   ├── accessibility.html
│   └── credits.html
│
├── roasts/
│   ├── index.html
│   ├── stick-intervention.html
│   ├── berrynose-shipping-chart.html
│   ├── oakheart-is-winning.html
│   ├── group-project.html
│   ├── lost-media.html
│   └── freight-train.html
│
├── files/
│   ├── index.html
│   ├── timeline.html
│   ├── characters/
│   │   ├── starpaw.html
│   │   ├── jayfeather.html
│   │   ├── steelpaw.html
│   │   ├── amberpaw.html
│   │   ├── nightpaw.html
│   │   ├── ashpaw.html
│   │   ├── rustpaw.html
│   │   ├── millie.html
│   │   ├── ivypool.html
│   │   └── berrynose.html
│   └── incidents/
│       ├── controlled-demonstration.html
│       ├── dovewing-software-update.html
│       └── gathering-chaos-edition.html
│
├── atlas/
│   ├── index.html
│   ├── medvednica.html
│   └── candidate-territories.html
│
└── herbs/
    ├── index.html
    ├── catmint.html
    ├── marigold.html
    ├── juniper-berries.html
    ├── cobwebs.html
    └── icelandic-moss.html
```

---

# 6. Home Page

**Route:** `/`

## Metadata

```text
<title>STARPaw.net — Warrior Cats, Dragged Through the Internet</title>

<meta name="description"
content="Jayfeather roasts the fandom, Starpaw breaks reality,
ThunderClan evaluates foreign territories, and herbs receive RPG stats.">
```

## Hero

### Eyebrow

```text
UNOFFICIAL THUNDERCLAN INTERNET TERMINAL
```

### H1

```text
WARRIOR CATS,
DRAGGED THROUGH
THE INTERNET.
```

### Body copy

> Welcome to the archive where Jayfeather reviews fandom mistakes, Starpaw solves simple problems with reality-breaking technology, ThunderClan develops an international expansion policy, and catmint has an economy.

### Primary buttons

```text
[ENTER THE ROAST ARCHIVE]
[OPEN A RANDOM FILE]
```

### System status panel

```text
SYSTEM STATUS

Jayfeather’s patience:        04%
Starpaw supervision:         FAILED
Catmint reserves:            CLASSIFIED
Berrynose safety:            UNCONFIRMED
Empire status:               “NOT AN EMPIRE”
```

---

## Four-section grid

### Card 1: Roasts

**Label:** `FANDOM DAMAGE CONTROL`

**Title:**  
```text
JAYFEATHER ROASTING THE FANDOM
```

**Copy:**

> Memes, comics, cursed edits, bad ships, old jokes, and the growing realization that somebody spent several hours making all of this.

**Button:**  
```text
[VIEW ROASTS]
```

---

### Card 2: Files

**Label:** `CLASSIFIED ROLEPLAY ARCHIVE`

**Title:**  
```text
THE STARPAW FILES
```

**Copy:**

> Character dossiers and incident reports documenting the apprentice who treats reality like an editable configuration file.

**Button:**  
```text
[ACCESS FILES]
```

---

### Card 3: Atlas

**Label:** `FIELD OPERATIONS`

**Title:**  
```text
PROJECT THUNDERCLAN EMPIRE
```

**Copy:**

> Geographic reports from a completely peaceful expansion project that only uses the word “empire” because it sounds cooler.

**Button:**  
```text
[OPEN ATLAS]
```

---

### Card 4: Herbs

**Label:** `MEDICINE CAT INVENTORY`

**Title:**  
```text
JAYFEATHER’S TOTALLY LEGIT HERB GUIDE
```

**Copy:**

> Healing items, strategic resources, status effects, supply shortages, and medical advice that should never be used outside a fictional cat book.

**Button:**  
```text
[OPEN INVENTORY]
```

---

## Featured roast

**Section title:**  
```text
TODAY’S FANDOM PROBLEM
```

**Card title:**  
```text
Please Stop Drawing Me Dating My Stick
```

**Card copy:**

> The fandom has repeated the joke for years. Jayfeather has escalated the complaint to a security matter.

**Verdict:**

```text
JAYFEATHER APPROVAL: DENIED
ABSURDITY LEVEL: 8/10
```

**Button:**

```text
[READ THE INTERVENTION]
```

---

## Featured classified file

**Title:**  
```text
INCIDENT 014: DOVEWING SOFTWARE UPDATE
```

**Excerpt:**

> Starpaw attempted to protect ThunderClan intelligence by applying what he described as a “directional sensory filter” to Dovewing.

**Outcome:**

```text
OPERATIONAL RESULT: SUCCESS
ETHICAL REVIEW: EXTREMELY NOT SUCCESS
```

**Button:**

```text
[OPEN INCIDENT REPORT]
```

The incident is based on Starpaw suppressing Dovewing’s perception in the direction of the ThunderClan camp, which Graystripe and Jayfeather describe as patching her like software. 

---

## Home page closing quote

> “I’m less concerned that you could do that and more concerned that your first instinct was ‘install an update on Dovewing.’”  
>  
> — Jayfeather

---

# 7. Roasts Section

## 7.1 Archive page

**Route:** `/roasts/`

### H1

```text
JAYFEATHER ROASTING THE FANDOM
```

### Introduction

> The books supplied the characters. The fandom supplied the evidence.  
>  
> This archive contains memes, edits, short comics, fake guides, and jokes produced under one rule: the lore may provide the setup, but it is not required to provide the punchline.

### Filter controls

```text
ALL
FANDOM
CANON LOGIC
CURSED SHIPS
OUT OF CONTEXT
GAMING LOGIC
PURE INTERRUPTION
```

### Archive cards

1. Please Stop Drawing Me Dating My Stick
2. Berrynose and the 100,000-Page Shipping Chart
3. Oakheart Is Definitely Winning
4. Group Project
5. Legendary Lost Media
6. The Dark Forest vs. Freight Train

---

## 7.2 Roast: Please Stop Drawing Me Dating My Stick

**Route:** `/roasts/stick-intervention.html`

**Labels:** `CANON REFERENCE`, `SATIRE`, `FANDOM`

### H1

```text
PLEASE STOP DRAWING ME DATING MY STICK
```

### Subheading

```text
A formal request from Jayfeather to the Warrior Cats fandom.
```

### Comic layout

#### Panel 1

Visual:

- Off-white background.
- Jayfeather represented as a dark gray geometric cat.
- A plain brown stick lies beside him.
- Jayfeather faces the viewer.

Text:

> “I need to address a recurring problem.”

#### Panel 2

Visual:

- A board behind Jayfeather displays crude hearts around a drawing of him and the stick.

Text:

> “Please stop drawing me dating my stick.”

#### Panel 3

Visual:

- Jayfeather places one paw on a crudely rendered shotgun.
- The weapon remains visually absurd and non-realistic.

Text:

> “This is not a ship.”

#### Panel 4

Visual:

- Close-up.
- Red background.
- White text.

Text:

> “Or I ask StarClan for your address.”

### Page commentary

> The joke is not that Jayfeather is romantically attached to a stick. The joke is that the fandom has repeated the idea for so long that Jayfeather has moved directly from denial to supernatural intimidation.  
>  
> A visitor unfamiliar with Warrior Cats sees an angry cat threatening artists over a piece of wood. A fan sees the return of a joke that somehow survived every attempt to kill it.

This entry directly reflects the established escalation from “Please stop drawing me dating my stick” to asking StarClan for the artist’s address. 

### Rating block

```text
JOKE TYPE: Fandom intervention
LORE REQUIRED: Medium
ABSURDITY: 8/10
JAYFEATHER APPROVAL: He wrote it
```

### Related content

- Berrynose and the 100,000-Page Shipping Chart
- Jayfeather’s Totally Legit Herb Guide
- Legendary Lost Media

---

## 7.3 Roast: Berrynose and the Shipping Chart

**Route:** `/roasts/berrynose-shipping-chart.html`

**Labels:** `SATIRE`, `CURSED SHIPS`, `NON-CANON`

### H1

```text
BERR YNOSE AND THE 100,000-PAGE SHIPPING CHART
```

The rendered heading uses `BERRYNOSE`; the spacing above is not reproduced.

### Comic layout

#### Panel 1

Visual:

- Berrynose sits beside a broken stick.
- Jayfeather enters.
- A caption identifies the broken object as “FIXED FIVE MINUTES AGO.”

Dialogue:

**Berrynose:**

> “Please don’t hurt me.”

**Jayfeather:**

> “I won’t.”

#### Panel 2

Berrynose relaxes.

Jayfeather places an enormous binder on the ground.

**Jayfeather:**

> “I’m going to show you every terrible Warrior Cats ship instead.”

#### Panel 3

The binder opens.

Visible headings include:

```text
DUKE × DIESEL × MIDNIGHT
PAGE 1 OF 100,000
```

**Berrynose:**

> “You said you wouldn’t hurt me!”

**Jayfeather:**

> “This is educational.”

#### Panel 4

The camera pulls back until the camp is a tiny dot beneath an enormous paper trail.

Caption:

```text
PAGE 47
```

**Berrynose:**

> “WHY IS IT ALWAYS ME?”

### Commentary

> The joke uses Berrynose as the unwilling target and escalates a minor accident into psychological warfare. The shipping chart is funny because the punishment is both disproportionate and delivered with complete medical professionalism.

### Rating

```text
JOKE TYPE: Bait-and-switch
LORE REQUIRED: Low
BERR YNOSE SAFETY: COMPROMISED
PAGES REMAINING: 99,953
```

The public page renders `BERRYNOSE SAFETY` without the spacing artifact.

The bait-and-switch structure and the 100,000-page escalation are established in the source material. 

---

## 7.4 Roast: Oakheart Is Definitely Winning

**Route:** `/roasts/oakheart-is-winning.html`

**Labels:** `OUT OF CONTEXT`, `CANON REFERENCE`, `SATIRE`

### H1

```text
OAKHEART IS DEFINITELY WINNING
```

### Image composition

The page displays two stylized HTML/CSS panels.

#### Original logic

```text
Tigerclaw has Oakheart pinned.
Oakheart is losing.
```

#### Improved logic

```text
Tigerclaw has Oakheart pinned.
Oakheart is using his victory-cry face.
Oakheart has apparently never been happier.
```

### Main caption

```text
OAKHEART:
YEEEEAAAAAHHHHHH!
```

### Secondary caption

```text
TIGERCLAW:
Why are you celebrating?
```

### Commentary

> The edit combines a losing body position with a triumphant facial expression. No knowledge of the battle is required. The image communicates the entire problem: Oakheart is objectively losing and emotionally having the greatest moment of his life.

### Rating

```text
JOKE TYPE: Visual contradiction
LORE REQUIRED: None
TACTICAL SITUATION: Bad
MORALE: UNREASONABLY HIGH
```

---

## 7.5 Roast: Group Project

**Route:** `/roasts/group-project.html`

**Labels:** `CANON REFERENCE`, `SATIRE`

### H1

```text
GROUP PROJECT
```

### Image text

```text
GROUP PROJECT

ONLY ONE ACTUALLY DID SOMETHING
```

### Character placement

- Squirrelflight stands in the center as the “project.”
- Bramblestar appears with a clipboard marked `ACTUALLY WORKED`.
- Ashfur and Stormfur stand nearby under the label `PRESENT IN THE GROUP CHAT`.

### Commentary

> This is not a complete literary analysis. It is a group-project meme with Warrior Cats characters assigned to the available roles. Accuracy has been sacrificed in favor of the argument becoming funnier.

### Jayfeather’s verdict

> “You reduced several books of interpersonal conflict to a school assignment.”  
>  
> “Correct.”  
>  
> “Good. It was taking too long.”

---

## 7.6 Roast: Legendary Lost Media

**Route:** `/roasts/lost-media.html`

**Labels:** `FANDOM`, `SATIRE`, `PERSONAL ARCHIVE`

### H1

```text
LEGENDARY LOST MEDIA
```

### Body

> Years ago, several Warrior Cats animations existed on hardware that no longer does.  
>  
> Memory preserved the successful jokes, the scenes that almost worked, and the fact that creating them felt important. Memory did not preserve the missing sound effects, sliding character models, questionable timing, or the possibility that the entire production ran at fifteen frames per second.

### Dialogue block

**Graystripe:**

> “So nobody will ever see these animations again?”

**Creator:**

> “Probably not.”

**Jayfeather:**

> “Then they have achieved the highest possible status.”

**Creator:**

> “What’s that?”

**Jayfeather:**

> “Lost media.”

### Archive status

```text
FILE LOCATION: Unknown
BACKUP STATUS: No
MEMORY QUALITY: Suspiciously flattering
HISTORICAL IMPORTANCE: Increasing every year
```

This exchange and the lost-media framing are established in the uploaded history. 

---

## 7.7 Roast: The Dark Forest vs. Freight Train

**Route:** `/roasts/freight-train.html`

**Labels:** `PURE INTERRUPTION`, `CROSSOVER LOGIC`, `NON-CANON`

### H1

```text
THE DARK FOREST VS. FREIGHT TRAIN
```

### Comic

#### Panel 1

Firestar stands before an assembled Clan.

> “The Dark Forest is attacking!”

#### Panel 2

A freight train crashes through the side of the panel.

No explanation is provided.

#### Panel 3

Graystripe looks directly at the viewer.

> “Pootis.”

#### Panel 4

Black screen.

```text
END
```

### Commentary

> The Dark Forest does not matter. The train does not belong there. Graystripe does not explain himself. The interruption is the joke.

### Rating

```text
LORE REQUIRED: None
CONTEXT PROVIDED: None
STRUCTURAL INTEGRITY OF CAMP: None
```

This page formalizes the established distinction between recognition-based Warrior Cats memes and Source-engine-style interruption humor. 

---

# 8. The Starpaw Files

## 8.1 Files index

**Route:** `/files/`

### H1

```text
THE STARPAW FILES
```

### Introduction

> This archive records the activities of Starpaw and the cats affected by his arrival.  
>  
> Starpaw is a former Twoleg from another universe, currently operating in cat form. He has access to Looney-Tunes-style physics, reality-editing abilities, portals, time manipulation, and a console that translates decisions into changes within the roleplay world.   
>  
> He is helpful, dangerous, usually sincere, and the primary reason Jayfeather’s patience is tracked as a percentage.

### Access panel

```text
ARCHIVE ACCESS: GRANTED

Public character files:       10
Incident reports:              3
Ethical complaints:           Many
Resolved complaints:           0
```

### Main links

```text
[CHARACTER DOSSIERS]
[MASTER TIMELINE]
[INCIDENT REPORTS]
```

---

## 8.2 Character: Starpaw

**Route:** `/files/characters/starpaw.html`

**Labels:** `ROLEPLAY`, `CLASSIFIED`

### Identity

```text
NAME: Starpaw
RANK: Apprentice
FORMER SPECIES: Twoleg
CURRENT SPECIES: Cat
ROLE: Reality-breaking problem solver
SUPERVISOR: Jayfeather
SUPERVISION STATUS: Theoretical
```

### Summary

> Starpaw is a former Twoleg and war survivor from another universe. He entered the Warrior Cats world in cat form while retaining access to abilities governed less by physics than by comedic timing.  
>  
> He deliberately uses an apprentice name that violates normal Clan expectations. The name functions as both a warning and a promise: he intends to force the Clan toward a new way of thinking.

### Personality

- confident;
- inventive;
- theatrical;
- protective;
- impatient with conventional limitations;
- willing to use disproportionately complex solutions;
- treats dangerous ideas as engineering problems;
- sincerely believes successful results justify at least part of the process.

### Known abilities

- portal creation;
- teleportation;
- time interruption;
- extreme strength;
- reality modification;
- console commands;
- dream broadcasting;
- perception alteration;
- possession;
- rapid plant growth;
- creation of equipment and simulations;
- Looney-Tunes-style physical resilience.

### Operational rule

> Starpaw does not ask, “What is the normal solution?”  
>  
> He asks, “What solution becomes possible if reality stops objecting?”

### Known weakness

> Starpaw’s greatest limitation is not power. It is his tendency to interpret “technically successful” as a complete moral defense.

### Jayfeather’s assessment

> “He is reckless, overpowered, impossible to supervise, and occasionally useful. Unfortunately, the last part encourages him.”

---

## 8.3 Character: Jayfeather

**Route:** `/files/characters/jayfeather.html`

### Identity

```text
NAME: Jayfeather
ROLE: Medicine cat
SECONDARY ROLE: Unwilling quality-control department
CURRENT PATIENCE: 4%
```

### Summary

> Jayfeather is the site’s primary commentator and Starpaw’s most reliable source of resistance. He responds to absurdity with direct criticism, practical caution, and the growing realization that Starpaw’s methods sometimes work.

### Site function

- hosts the Roast Archive;
- reviews herb entries;
- evaluates dangerous experiments;
- objects to unnecessary escalation;
- provides the final line after everyone else has stopped helping.

### Voice rules

Jayfeather’s dialogue is:

- short;
- precise;
- irritated;
- grounded in practical consequences;
- rarely more than three sentences at a time.

### Standard response pattern

```text
1. Identify the problem.
2. Explain why the method is unreasonable.
3. Admit that it worked.
4. Become more annoyed because it worked.
```

### Featured quote

> “That’s an incredibly overengineered solution.”

---

## 8.4 Character: Steelpaw

**Route:** `/files/characters/steelpaw.html`

```text
ROLE: Expedition team member
SPECIALTY: Pattern recognition and calm observation
```

> Steelpaw recognizes Starpaw’s behavioral patterns before most of the Clan does. If Starpaw is carrying unusual equipment, Steelpaw assumes either an emergency or an expedition and is usually correct.

### Featured quote

> “If he’s holding the Super Soaker, it’s either another emergency or another expedition.”

### Field assessment

```text
RELIABILITY: High
PANIC RESPONSE: Low
ABILITY TO PREDICT STARPAW: Disturbingly high
```

---

## 8.5 Character: Amberpaw

**Route:** `/files/characters/amberpaw.html`

```text
ROLE: Expedition team member
SPECIALTY: Adaptation and field support
KNOWN WEAKNESS: Being awakened with a Super Soaker
```

> Amberpaw joins Starpaw and Steelpaw during territorial surveys. He responds to impossible expedition announcements with initial disbelief followed by practical preparation.

### Featured quote

> “Wait… Croatia?”

---

## 8.6 Character: Nightpaw

**Route:** `/files/characters/nightpaw.html`

```text
ROLE: Combat specialist
ABILITY CLASS: Speed and precision
RISK LEVEL: High under poor supervision
```

> Nightpaw uses controlled bursts of speed and precise attacks to manage multiple targets. His recorded ShadowClan encounter demonstrated that he could neutralize two opponents without causing serious injury.

### Tactical use

- rapid interception;
- multi-target control;
- precision strikes;
- defensive response.

### Limitation

> Nightpaw’s confidence can turn an effective defense into an unnecessary solo engagement.

---

## 8.7 Character: Ashpaw

**Route:** `/files/characters/ashpaw.html`

```text
ROLE: Intelligence specialist
ABILITY CLASS: Language, surveillance, and distraction
AUTHORIZATION: Supervised use only
```

> Ashpaw gathers and interprets information, uses Twoleg language, and creates sound-based distractions that interfere with an opponent’s timing.

### Tactical use

- reconnaissance;
- warning systems;
- misdirection;
- intelligence analysis.

### Limitation

> Surveillance remains useful only while the Clan can trust the cat performing it.

---

## 8.8 Character: Rustpaw

**Route:** `/files/characters/rustpaw.html`

```text
ROLE: Mobility specialist
ABILITY CLASS: Enhanced movement
```

> Rustpaw performs mid-air jumps, evasive maneuvers, and coordinated movement that ordinary cats cannot reproduce.

### Tactical use

- crossing obstacles;
- aerial redirection;
- rapid flanking;
- rescue access.

### Limitation

> Mobility does not replace planning. It only makes bad planning happen faster.

---

## 8.9 Character: Millie

**Route:** `/files/characters/millie.html`

```text
ROLE: Stand user
ABILITY CLASS: Speed and perception
```

> Millie’s Stand can double her movement speed and produce perception effects that make her difficult to track.

### Tactical use

- rapid delivery;
- target confusion;
- evacuation;
- battlefield repositioning.

### Limitation

> Extended use makes coordinated movement difficult for allies who cannot follow her timing.

---

## 8.10 Character: Ivypool

**Route:** `/files/characters/ivypool.html`

```text
ROLE: Hazardous-material specialist
ABILITY CLASS: Venom and plant resistance
```

> Ivypool can safely handle plants that would endanger other cats. This makes her valuable during medicine-den emergencies and unfamiliar expeditions.

### Tactical use

- poisonous plant removal;
- herb recovery;
- contaminated-area access;
- medicine-den support.

### Limitation

> Personal resistance does not make the surrounding plants safe for anyone else.

---

## 8.11 Character: Berrynose

**Route:** `/files/characters/berrynose.html`

```text
ROLE: Heavy physical specialist
ABILITY CLASS: Reinforced claws and teeth
SECONDARY ROLE: Comedy target
```

> Berrynose can cut through heavy practice material with exceptional precision. He also appears repeatedly in punishment scenarios involving broken objects and cursed fandom content.

### Tactical use

- obstacle removal;
- structural access;
- defensive cutting;
- controlled demolition.

### Jayfeather’s note

> “His abilities are useful. His proximity to my repaired property is not.”

The team’s demonstrated abilities are established in the controlled training sequence. 

---

# 9. Incident Reports

## 9.1 Controlled Demonstration

**Route:** `/files/incidents/controlled-demonstration.html`

**Labels:** `ROLEPLAY`, `FIELD RECORD`

### Header

```text
INCIDENT 006
CONTROLLED ABILITY DEMONSTRATION
```

### Objective

> Demonstrate the apprentices’ abilities to ThunderClan leadership without causing lethal injury, uncontrolled damage, or a political emergency.

### Participants

- Starpaw;
- Nightpaw;
- Ashpaw;
- Rustpaw;
- Millie;
- Ivypool;
- Berrynose;
- Bramblestar;
- Squirrelflight;
- Hollyleaf;
- Jayfeather.

### Demonstration record

```text
Nightpaw:
Controlled speed bursts and simultaneous target management.

Ashpaw:
Sound-based distraction and timing interference.

Rustpaw:
Mid-air redirection and coordinated obstacle movement.

Millie:
Stand-assisted speed increase and afterimage effect.

Ivypool:
Safe handling of venomous plants.

Berrynose:
Precision cutting against reinforced practice material.
```

### Outcome

> Bramblestar and Squirrelflight accepted that the abilities could serve ThunderClan if properly guided. Hollyleaf remained cautious but shifted from open rejection to reluctant acknowledgment.

### Final assessment

```text
PHYSICAL DAMAGE: Minimal
POLITICAL DAMAGE: Contained
PROOF OF COMPETENCE: Established
FUTURE SUPERVISION: Mandatory
```

---

## 9.2 Dovewing Software Update

**Route:** `/files/incidents/dovewing-software-update.html`

**Labels:** `ROLEPLAY`, `CLASSIFIED`, `ETHICAL FAILURE`

### Header

```text
INCIDENT 014
DOVEWING SOFTWARE UPDATE
```

### Summary

> After detecting Dovewing observing ThunderClan, Starpaw rendered her unconscious, removed recent memories, and installed a directional suppression effect that blocked her ability when facing ThunderClan camp and a forty-five-degree area around it.

### Starpaw’s justification

> “All your secrets are safe.”

### Clan response

**Bramblestar:**

> “Next time, talk to me first.”

**Graystripe:**

> “Normal cats solve spying by moving patrols. You solved it by patching Dovewing like she’s software.”

**Jayfeather:**

> “I’m less concerned that you could do that and more concerned that your first instinct was ‘install an update on Dovewing.’”

**Starpaw:**

> “It worked.”

**Jayfeather:**

> “That’s the problem.”

### Assessment

```text
OBJECTIVE: Protect ThunderClan intelligence
OBJECTIVE STATUS: Achieved

CONSENT: Absent
LEADERSHIP AUTHORIZATION: Absent
TECHNICAL COMPLEXITY: Excessive
ETHICAL STATUS: Failed
REPEAT AUTHORIZATION: Denied
```

---

## 9.3 Gathering: Chaos Edition

**Route:** `/files/incidents/gathering-chaos-edition.html`

**Labels:** `ROLEPLAY`, `PUBLIC EVENT`

### Header

```text
INCIDENT 008
FULL-MOON GATHERING: CHAOS EDITION
```

### Starpaw’s declaration

> “I’m not StarClan-touched. I’m not even from this world. I’m a Twoleg who escaped a war in my universe. Powers? Think Looney Tunes physics. Time freeze, absurd strength, teleportation—whatever fits the mood.”  
>  
> “Also, my name violates every single rule of your Code. That’s the point. Deal with it.”

### Demonstrations

- Ashpaw uses Twoleg language and distant intelligence.
- Rustpaw performs impossible mid-air movement.
- Nightpaw lifts a log with little visible effort.
- Millie crosses the clearing with Stand-assisted speed.
- Ivypool demonstrates resistance to dangerous plants.
- Berrynose cuts through stone.

### Public response

```text
CONFUSION: Universal
WHISPERING: Immediate
POLITICAL CONSEQUENCES: Pending
JAYFEATHER’S EXPECTATIONS: Somehow exceeded
```

The event establishes Starpaw’s former Twoleg identity and Looney-Tunes-style power framework. 

---

# 10. Timeline

**Route:** `/files/timeline.html`

## H1

```text
MASTER TIMELINE
```

### Entry 01 — Arrival

> Starpaw enters the Warrior Cats world in cat form while retaining abilities and knowledge from his former existence as a Twoleg.

### Entry 02 — Medicine-Den Assignment

> Jayfeather becomes Starpaw’s unwilling supervisor. Experimental medicine, role confusion, and repeated arguments begin immediately.

### Entry 03 — Apprentice Team

> Nightpaw, Ashpaw, Rustpaw, Millie, Ivypool, and Berrynose become part of a group whose abilities do not fit ordinary Clan expectations.

### Entry 04 — Controlled Demonstration

> ThunderClan leadership observes the team’s abilities under restricted conditions. Competence is established, though trust remains conditional.

### Entry 05 — Full-Moon Gathering

> Starpaw publicly identifies himself as a former Twoleg from another universe and explains his abilities through the phrase “Looney Tunes physics.”

### Entry 06 — Project ThunderClan Empire

> Starpaw, Steelpaw, and Amberpaw begin surveying territories outside the traditional Clan regions.

### Entry 07 — Zagreb Expedition

> Medvednica is evaluated as a candidate territory with strong forest cover, water access, prey potential, and substantial Twoleg traffic.

### Entry 08 — Dovewing Incident

> Starpaw protects ThunderClan secrecy by applying an unauthorized perception modification to Dovewing.

### Entry 09 — Candidate Expansion List

> Vitosha, the French forest near Disneyland Paris, Pesha, the Swiss Alps, and Thailand enter the expedition queue.

---

# 11. Expedition Atlas

## 11.1 Atlas index

**Route:** `/atlas/`

### H1

```text
PROJECT THUNDERCLAN EMPIRE
```

### Subtitle

```text
It is not actually an empire. It just sounds cooler.
```

### Introduction

> Project ThunderClan Empire evaluates distant regions for hunting, shelter, medicine, diplomacy, and long-term settlement.  
>  
> The project does not claim political control over real territory. The word “empire” remains in the title because Starpaw refused to replace it.

### Current status

```text
SURVEYED REGIONS: 2
ACTIVE CANDIDATE: Medvednica
PLANNED SURVEYS: 5
JAYFEATHER ENDORSEMENT: No
```

### Main cards

- Medvednica Territory Report
- Candidate Territories
- Expedition Team

---

## 11.2 Medvednica Territory Report

**Route:** `/atlas/medvednica.html`

**Labels:** `FIELD REPORT`, `ROLEPLAY`

### Header

```text
TERRITORY EVALUATION REPORT

LOCATION: Medvednica, Croatia
REGION: Zagreb
STATUS: Candidate Province #2
SUITABILITY: 4.5 / 5
```

### Executive summary

> Medvednica provides dense forest cover, elevated observation points, rocky shelter, streams, springs, and plausible prey. The territory is highly suitable for hunting, training, medicine-cat storage, and concealed movement.  
>  
> The primary weakness is heavy Twoleg activity near roads, recreational routes, and the summit.

### Territory statistics

| Category | Score |
|---|---:|
| Forest cover | 5/5 |
| Water | 4/5 |
| Prey potential | 4/5 |
| Shelter | 4/5 |
| Strategic value | 5/5 |
| Secrecy | 3/5 |
| Twoleg risk | High near summit |

### Sector 1: Tower Peak

```text
FUNCTION: Observation outpost
STATUS: Restricted
```

> Tower Peak provides the strongest long-distance view in the territory. It is valuable for weather observation, route planning, and early warning.

**Risk:** High Twoleg visibility.

**Operational rule:** No permanent open camp structures.

---

### Sector 2: Old Beech Woods

```text
FUNCTION: Main hunting grounds
STATUS: Approved
```

> Dense tree cover and ground vegetation make this the territory’s strongest hunting and concealment zone.

**Strengths:**

- prey cover;
- shaded travel;
- protection from distant observation;
- multiple escape routes.

---

### Sector 3: Stone Ridge

```text
FUNCTION: Warrior training
STATUS: Approved with supervision
```

> Rocky slopes support balance, climbing, jumping, and ambush training.

**Risk:** Falls and unstable footing.

**Jayfeather’s note:**

> “If Starpaw calls it an obstacle course, close it.”

---

### Sector 4: Hidden Spring

```text
FUNCTION: Water and herb reserve
STATUS: Protected
```

> Hidden Spring provides a quieter medicine-cat sector away from the busiest summit routes.

**Rules:**

- no combat training;
- no equipment storage in the water;
- no experimental broth without Jayfeather’s approval.

---

### Sector 5: South Slope

```text
FUNCTION: Zagreb access route
STATUS: Patrol corridor
```

> South Slope provides the most direct route toward the urban edge and must be monitored for Twoleg traffic.

### Final recommendation

> **Approved as Candidate Province #2 under Project ThunderClan Empire.**  
>  
> Camouflage measures and rotating patrol schedules are required near high-traffic areas.

The territory sectors, rating, advantages, and primary Twoleg risk follow the established Medvednica evaluation. 

---

## 11.3 Candidate Territories

**Route:** `/atlas/candidate-territories.html`

### H1

```text
CANDIDATE EXPEDITION QUEUE
```

### Introductory note

> The following territories have passed preliminary review. Their order reflects operational difficulty, not attractiveness.

---

### 1. Vitosha Mountains, Bulgaria

```text
PRIORITY: 1
DIFFICULTY: MODERATE
STATUS: NEXT SURVEY
```

> A mountainous environment comparable to Versitale Slopes, with familiar terrain and promising natural resources.

**Primary advantage:** Existing mountain-expedition experience.

**Primary concern:** Seasonal weather and elevation.

---

### 2. French Forest near Disneyland Paris

```text
PRIORITY: 2
DIFFICULTY: MODERATE
STATUS: APPROVED FOR RECONNAISSANCE
```

> A forest located near a major Twoleg attraction. Local noise is high, but most Twoleg activity remains concentrated inside the entertainment area.

**Primary advantage:** Reduced interest from larger wildlife near the brightest and loudest areas.

**Primary concern:** Nightly light, sound, and transportation activity.

---

### 3. Pesha, Italy

```text
PRIORITY: 3
DIFFICULTY: MODERATE–HIGH
STATUS: REGIONAL COMPARISON REQUIRED
```

> The expedition compares two possible environments: mountain territory for herbs and elevated shelter, or river territory for fish and reliable water.

**Primary advantage:** Multiple viable resource systems.

**Primary concern:** The team must select one environment before establishing a long-term route.

---

### 4. Swiss Alps

```text
PRIORITY: 4
DIFFICULTY: HIGH
STATUS: CLIMATE REVIEW REQUIRED
```

> Alpine territory offers abundant mouse-control opportunities around cheese storage and production areas.

**Primary advantage:** Reliable prey opportunities near Twoleg food operations.

**Primary concern:** Altitude, snow, cold, and long-term winter settlement.

**Graystripe’s note:**

> “Unlimited employment opportunities in cheese mouse control.”

---

### 5. Thailand

```text
PRIORITY: 5
DIFFICULTY: EXTREME
STATUS: EXPERIENCED SCOUTS ONLY
```

> Tropical forests, coastal food sources, Buddhist temple grounds, unfamiliar prey, monkeys, heat, and an entirely new ecosystem make this the most difficult candidate.

**Primary advantage:** Diverse resources and new experience.

**Primary concern:** Almost everything else.

**Field warning:**

> Monkeys may steal your lunch.

The territory list and final difficulty order are established in the expedition planning material.  

---

# 12. Herb Guide

## 12.1 Herb index

**Route:** `/herbs/`

### H1

```text
JAYFEATHER’S TOTALLY LEGIT HERB GUIDE
```

### Subtitle

```text
A medicine-cat inventory system nobody authorized.
```

### Safety notice

> **Fictional content warning:** This website is a Warrior Cats fan project, not medical, veterinary, botanical, or survival advice. Do not eat, prepare, administer, or collect plants based on this guide.

### Introduction

> Herbs are displayed as game items with rarity, effects, availability, and trade value. Real plant names may appear, but all stats and mechanics belong to the fictional site system.

### Inventory controls

```text
ALL ITEMS
HEALING
SUPPORT
MATERIAL
COMMON
RARE
LEGENDARY
```

### Inventory cards

- Catmint
- Marigold
- Juniper Berries
- Cobwebs
- Prepared Icelandic Moss

---

## 12.2 Catmint

**Route:** `/herbs/catmint.html`

**Labels:** `ITEM DATABASE`, `CANON-INSPIRED`

```text
ITEM: Catmint
TYPE: Emergency healing herb
RARITY: Legendary
SEASONAL AVAILABILITY: Limited
STACK LIMIT: Controlled reserve
TRADE VALUE: Extreme
```

### Fictional effect

> Primary medicine-cat resource used during greencough outbreaks.

### Strategic effect

```text
+80 outbreak stability
+300% diplomatic attention
+1 emergency meeting per neighboring Clan
```

### Economy

> Catmint becomes more valuable as other Clans’ supplies decline. A large reserve can protect ThunderClan, support neighboring Clans, or become diplomatic leverage.

### Jayfeather’s review

> “It is medicine, not currency.”  
>  
> “Unfortunately, scarcity disagrees.”

### Item warning

> Hoarding protects one Clan until the sickness crosses the border anyway.

The catmint shortage scenario establishes ThunderClan’s strategic reserve and the tension between charity, stability, and leverage. 

---

## 12.3 Marigold

**Route:** `/herbs/marigold.html`

```text
ITEM: Marigold
TYPE: Basic healing item
RARITY: Common
ROLE: Early-game medicine-cat inventory
```

### Fictional effect

```text
+15 wound-care support
+5 apprentice confidence
-10 excitement after the fifth use
```

### Description

> A reliable low-level healing item. It lacks legendary status, political importance, and a dramatic trade economy. This is why it is useful.

### Jayfeather’s review

> “It works. That is a better feature than glowing.”

---

## 12.4 Juniper Berries

**Route:** `/herbs/juniper-berries.html`

```text
ITEM: Juniper Berries
TYPE: Consumable support item
RARITY: Uncommon
REGIONAL CONTROL: WindClan has suspiciously good access
```

### Fictional effect

```text
+10 breathing support
+5 travel readiness
+20 arguments about resource ownership
```

### Description

> A useful consumable that becomes much more interesting when the inventory screen reveals another Clan owns most of it.

### Jayfeather’s review

> “No, you may not invade WindClan because their item drops are better.”

---

## 12.5 Cobwebs

**Route:** `/herbs/cobwebs.html`

```text
ITEM: Cobwebs
TYPE: Medical material
RARITY: Common
EQUIPMENT SLOT: Wound covering
```

### Fictional effect

```text
+20 wound stability
-5 movement if applied badly
+30 irritation if the spider is still present
```

### Variants

```text
STANDARD COBWEB
PREMIUM COBWEB
HAUNTED COBWEB
```

`PREMIUM COBWEB` and `HAUNTED COBWEB` have no additional medical benefit.

### Jayfeather’s review

> “The spider does not make it premium.”

---

## 12.6 Prepared Icelandic Moss

**Route:** `/herbs/icelandic-moss.html`

```text
ITEM: Prepared Icelandic Moss
TYPE: Support treatment
RARITY: Rare
PREPARATION REQUIREMENT: High
REPLACEMENT FOR CATMINT: No
```

### Fictional effect

```text
Raw:
+3 throat comfort
-10 confidence in the apprentice who served it

Prepared:
+15 throat comfort
+10 patient calm
+5 early-stage breathing support
```

### Description

> Raw preparation produces weak support. Careful preparation turns the item into a more reliable soothing treatment, though it does not replace catmint.

### Jayfeather’s verdict

> “You didn’t discover a miracle cure.”  
>  
> “You discovered how not to ruin a good herb.”

The raw-versus-prepared distinction and Jayfeather’s verdict come from the medicine-den experiment. 

---

# 13. About Page

**Route:** `/about/`

## H1

```text
ABOUT THIS DISASTER
```

### Main copy

> STARPaw.net began with a simple creative rule: Warrior Cats jokes do not always need to depend on storyline lore.  
>  
> The characters can act as performers inside other forms of comedy—gaming guides, fake software updates, Source-engine interruption jokes, RPG economies, classified archives, expedition reports, and deliberately crude comics.  
>  
> Jayfeather became the voice of the project because he is practical, sarcastic, overworked, and uniquely qualified to react to situations nobody should have created. Starpaw became the source of those situations: a rule-breaking, fourth-wall-aware system disruptor who pushes every solution beyond reasonable limits.   
>  
> The result is not a replacement for Warrior Cats canon. It is a fan-made comedy environment that borrows the cast, ignores the expected genre, and asks what happens next.

## Creative rule block

```text
THE RULE

The lore is allowed to set up the joke.
The lore is not required to finish it.
```

## Audience test

```text
NON-FAN:
“I don’t understand why the cat is angry at a stick.”

WARRIOR CATS FAN:
“I hate that I understand this.”

FANDOM VETERAN:
“This is the dumbest thing I’ve ever seen.”

[SAVES IMAGE]
```

This audience distinction reflects the established discussion of fandom-specific humor. 

---

# 14. Credits Page

**Route:** `/about/credits.html`

## H1

```text
CREDITS
```

### Copy

```text
PROJECT DIRECTION
Original creator and roleplay author

WRITING AND CONTINUITY
Based on the Starpaw and Jayfeather roleplay archive

ORIGINAL CHARACTERS
Starpaw
Steelpaw
Amberpaw
Nightpaw
Ashpaw
Rustpaw
Millie

CANON CHARACTERS AND SETTING
Warriors / Warrior Cats and its respective rights holders

SITE DESIGN
STARPaw.net static design system

MEME AND COMIC IMAGES
Credited individually on each content page
```

### Asset-credit format

Every third-party image displays:

```text
Source image: [creator or production]
Edit: [site creator]
Used for non-commercial fan commentary
```

No image is published when its source is unknown. Text-only or CSS/SVG reconstruction is used instead.

---

# 15. Accessibility Page

**Route:** `/about/accessibility.html`

## H1

```text
ACCESSIBILITY
```

### Public copy

> STARPaw.net is designed to remain usable without animation, audio, hover controls, or precise pointer input.

### Implemented behavior

- Full keyboard navigation;
- visible focus outlines;
- skip-to-content link;
- semantic heading hierarchy;
- alt text or transcripts for every comic;
- captions never embedded as the only readable image text;
- no autoplay audio;
- no flashing content;
- reduced-motion support;
- minimum body text size of 16 pixels;
- minimum target size of 44 by 44 pixels;
- color labels accompanied by text;
- spoiler controls implemented as buttons.

---

# 16. 404 Page

**Route:** `/404.html`

## H1

```text
FILE NOT FOUND
```

### Copy

> Starpaw moved it through a portal.  
>  
> He did not document the destination.

### Status block

```text
ERROR: 404
RECOVERY STATUS: Unlikely
JAYFEATHER’S RESPONSE: “Of course he did.”
```

### Buttons

```text
[RETURN HOME]
[OPEN A RANDOM FILE]
```

---

# 17. Static Interaction Requirements

## Random content

`/assets/js/random.js` contains the fixed route list:

```js
const randomRoutes = [
  "/roasts/stick-intervention.html",
  "/roasts/berrynose-shipping-chart.html",
  "/roasts/oakheart-is-winning.html",
  "/roasts/group-project.html",
  "/roasts/lost-media.html",
  "/roasts/freight-train.html",
  "/files/characters/starpaw.html",
  "/files/characters/jayfeather.html",
  "/files/incidents/controlled-demonstration.html",
  "/files/incidents/dovewing-software-update.html",
  "/files/incidents/gathering-chaos-edition.html",
  "/atlas/medvednica.html",
  "/atlas/candidate-territories.html",
  "/herbs/catmint.html",
  "/herbs/marigold.html",
  "/herbs/juniper-berries.html",
  "/herbs/cobwebs.html",
  "/herbs/icelandic-moss.html"
];
```

The random button selects one route with:

```js
const route =
  randomRoutes[Math.floor(Math.random() * randomRoutes.length)];

window.location.href = route;
```

## Archive filters

Each card uses:

```html
<article
  class="archive-card"
  data-category="fandom satire">
```

Filter buttons set `hidden` on cards that do not contain the selected category.

## Redacted content

Redactions are real buttons, not hover effects.

Initial state:

```text
████████████████
```

Accessible label:

```text
Reveal classified text
```

After activation, the original text replaces the blocks.

## Spoilers

Spoiler content remains in the document but receives `hidden` until the reveal button is activated.

The visitor’s spoiler preference is stored in `localStorage` under:

```text
starpaw-spoilers
```

---

# 18. Final File Structure

```text
/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── favicon.svg
│
├── about/
├── roasts/
├── files/
├── atlas/
├── herbs/
│
└── assets/
    ├── css/
    │   ├── reset.css
    │   ├── tokens.css
    │   ├── global.css
    │   ├── components.css
    │   ├── roasts.css
    │   ├── files.css
    │   ├── atlas.css
    │   └── herbs.css
    │
    ├── js/
    │   ├── navigation.js
    │   ├── filters.js
    │   ├── spoilers.js
    │   ├── redactions.js
    │   └── random.js
    │
    ├── icons/
    │   ├── paw.svg
    │   ├── leaf.svg
    │   ├── water.svg
    │   ├── warning.svg
    │   ├── boot.svg
    │   ├── star.svg
    │   └── classified.svg
    │
    └── images/
        ├── roasts/
        ├── characters/
        ├── atlas/
        └── herbs/
```

---

# 19. Version 1 Completion Definition

Version 1 consists of:

- 1 home page;
- 4 informational pages;
- 1 custom 404 page;
- 1 roast archive;
- 6 complete roast entries;
- 1 character-file index;
- 10 character dossiers;
- 1 timeline;
- 3 incident reports;
- 1 atlas index;
- 2 atlas reports;
- 1 herb index;
- 5 populated herb entries;
- functional filters;
- functional spoiler controls;
- functional redaction controls;
- functional random-page navigation;
- responsive desktop and mobile layouts;
- full keyboard support;
- complete public copy and metadata.

No login, comments, submissions, database, server runtime, external search service, or unfinished content blocks are present in Version 1.
