// Shared character dossier content — used by files.html (roster) and character.html (detail).
// Full dossier content transcribed from firstversioncontent.md section 8.
window.STARPAW_CHARACTERS_DATA = [
  {
    slug: "starpaw",
    name: "Starpaw",
    tagline: "APPRENTICE · FORMER TWOLEG",
    quote: "“What solution becomes possible if reality stops objecting?”",
    labels: ["ROLEPLAY", "CLASSIFIED"],
    sections: [
      {
        type: "stats",
        stats: [
          ["NAME", "Starpaw"],
          ["RANK", "Apprentice"],
          ["FORMER SPECIES", "Twoleg"],
          ["CURRENT SPECIES", "Cat"],
          ["ROLE", "Reality-breaking problem solver"],
          ["SUPERVISOR", "Jayfeather"],
          ["SUPERVISION STATUS", "Theoretical"]
        ]
      },
      {
        type: "text",
        heading: "Summary",
        paragraphs: [
          "Starpaw is a former Twoleg and war survivor from another universe. He entered the Warrior Cats world in cat form while retaining access to abilities governed less by physics than by comedic timing.",
          "He deliberately uses an apprentice name that violates normal Clan expectations. The name functions as both a warning and a promise: he intends to force the Clan toward a new way of thinking."
        ]
      },
      {
        type: "list",
        heading: "Personality",
        items: [
          "confident",
          "inventive",
          "theatrical",
          "protective",
          "impatient with conventional limitations",
          "willing to use disproportionately complex solutions",
          "treats dangerous ideas as engineering problems",
          "sincerely believes successful results justify at least part of the process"
        ]
      },
      {
        type: "list",
        heading: "Known abilities",
        items: [
          "portal creation",
          "teleportation",
          "time interruption",
          "extreme strength",
          "reality modification",
          "console commands",
          "dream broadcasting",
          "perception alteration",
          "possession",
          "rapid plant growth",
          "creation of equipment and simulations",
          "Looney-Tunes-style physical resilience"
        ]
      },
      {
        type: "quote",
        heading: "Operational rule",
        lines: [
          "Starpaw does not ask, “What is the normal solution?”",
          "He asks, “What solution becomes possible if reality stops objecting?”"
        ]
      },
      {
        type: "quote",
        heading: "Known weakness",
        lines: [
          "Starpaw’s greatest limitation is not power. It is his tendency to interpret “technically successful” as a complete moral defense."
        ]
      },
      {
        type: "quote",
        heading: "Jayfeather’s assessment",
        lines: [
          "“He is reckless, overpowered, impossible to supervise, and occasionally useful. Unfortunately, the last part encourages him.”"
        ]
      }
    ]
  },
  {
    slug: "jayfeather",
    name: "Jayfeather",
    tagline: "MEDICINE CAT",
    quote: "“That’s an incredibly overengineered solution.”",
    labels: ["ROLEPLAY"],
    sections: [
      {
        type: "stats",
        stats: [
          ["NAME", "Jayfeather"],
          ["ROLE", "Medicine cat"],
          ["SECONDARY ROLE", "Unwilling quality-control department"],
          ["CURRENT PATIENCE", "4%"]
        ]
      },
      {
        type: "text",
        heading: "Summary",
        paragraphs: [
          "Jayfeather is the site’s primary commentator and Starpaw’s most reliable source of resistance. He responds to absurdity with direct criticism, practical caution, and the growing realization that Starpaw’s methods sometimes work."
        ]
      },
      {
        type: "list",
        heading: "Site function",
        items: [
          "hosts the Roast Archive",
          "reviews herb entries",
          "evaluates dangerous experiments",
          "objects to unnecessary escalation",
          "provides the final line after everyone else has stopped helping"
        ]
      },
      {
        type: "list",
        heading: "Voice rules",
        items: ["short", "precise", "irritated", "grounded in practical consequences", "rarely more than three sentences at a time"]
      },
      {
        type: "list",
        heading: "Standard response pattern",
        ordered: true,
        items: [
          "Identify the problem.",
          "Explain why the method is unreasonable.",
          "Admit that it worked.",
          "Become more annoyed because it worked."
        ]
      },
      {
        type: "quote",
        heading: "Featured quote",
        lines: ["“That’s an incredibly overengineered solution.”"]
      }
    ]
  },
  {
    slug: "steelpaw",
    name: "Steelpaw",
    tagline: "EXPEDITION TEAM",
    quote: "“If he’s holding the Super Soaker, it’s either another emergency or another expedition.”",
    labels: ["ROLEPLAY"],
    sections: [
      {
        type: "stats",
        stats: [
          ["ROLE", "Expedition team member"],
          ["SPECIALTY", "Pattern recognition and calm observation"]
        ]
      },
      {
        type: "text",
        paragraphs: [
          "Steelpaw recognizes Starpaw’s behavioral patterns before most of the Clan does. If Starpaw is carrying unusual equipment, Steelpaw assumes either an emergency or an expedition and is usually correct."
        ]
      },
      {
        type: "quote",
        heading: "Featured quote",
        lines: ["“If he’s holding the Super Soaker, it’s either another emergency or another expedition.”"]
      },
      {
        type: "stats",
        heading: "Field assessment",
        stats: [
          ["RELIABILITY", "High"],
          ["PANIC RESPONSE", "Low"],
          ["ABILITY TO PREDICT STARPAW", "Disturbingly high"]
        ]
      }
    ]
  },
  {
    slug: "amberpaw",
    name: "Amberpaw",
    tagline: "EXPEDITION TEAM",
    quote: "“Wait… Croatia?”",
    labels: ["ROLEPLAY"],
    sections: [
      {
        type: "stats",
        stats: [
          ["ROLE", "Expedition team member"],
          ["SPECIALTY", "Adaptation and field support"],
          ["KNOWN WEAKNESS", "Being awakened with a Super Soaker"]
        ]
      },
      {
        type: "text",
        paragraphs: [
          "Amberpaw joins Starpaw and Steelpaw during territorial surveys. He responds to impossible expedition announcements with initial disbelief followed by practical preparation."
        ]
      },
      { type: "quote", heading: "Featured quote", lines: ["“Wait… Croatia?”"] }
    ]
  },
  {
    slug: "nightpaw",
    name: "Nightpaw",
    tagline: "COMBAT SPECIALIST",
    quote: "“Speed and precision, occasionally too much of both.”",
    labels: ["ROLEPLAY"],
    sections: [
      {
        type: "stats",
        stats: [
          ["ROLE", "Combat specialist"],
          ["ABILITY CLASS", "Speed and precision"],
          ["RISK LEVEL", "High under poor supervision"]
        ]
      },
      {
        type: "text",
        paragraphs: [
          "Nightpaw uses controlled bursts of speed and precise attacks to manage multiple targets. His recorded ShadowClan encounter demonstrated that he could neutralize two opponents without causing serious injury."
        ]
      },
      {
        type: "list",
        heading: "Tactical use",
        items: ["rapid interception", "multi-target control", "precision strikes", "defensive response"]
      },
      {
        type: "quote",
        heading: "Limitation",
        lines: ["Nightpaw’s confidence can turn an effective defense into an unnecessary solo engagement."]
      }
    ]
  },
  {
    slug: "ashpaw",
    name: "Ashpaw",
    tagline: "INTELLIGENCE SPECIALIST",
    quote: "“Surveillance only works while the Clan trusts the cat doing it.”",
    labels: ["ROLEPLAY"],
    sections: [
      {
        type: "stats",
        stats: [
          ["ROLE", "Intelligence specialist"],
          ["ABILITY CLASS", "Language, surveillance, and distraction"],
          ["AUTHORIZATION", "Supervised use only"]
        ]
      },
      {
        type: "text",
        paragraphs: [
          "Ashpaw gathers and interprets information, uses Twoleg language, and creates sound-based distractions that interfere with an opponent’s timing."
        ]
      },
      {
        type: "list",
        heading: "Tactical use",
        items: ["reconnaissance", "warning systems", "misdirection", "intelligence analysis"]
      },
      {
        type: "quote",
        heading: "Limitation",
        lines: ["Surveillance remains useful only while the Clan can trust the cat performing it."]
      }
    ]
  },
  {
    slug: "rustpaw",
    name: "Rustpaw",
    tagline: "MOBILITY SPECIALIST",
    quote: "“Mobility doesn’t replace planning.”",
    labels: ["ROLEPLAY"],
    sections: [
      {
        type: "stats",
        stats: [
          ["ROLE", "Mobility specialist"],
          ["ABILITY CLASS", "Enhanced movement"]
        ]
      },
      {
        type: "text",
        paragraphs: [
          "Rustpaw performs mid-air jumps, evasive maneuvers, and coordinated movement that ordinary cats cannot reproduce."
        ]
      },
      {
        type: "list",
        heading: "Tactical use",
        items: ["crossing obstacles", "aerial redirection", "rapid flanking", "rescue access"]
      },
      {
        type: "quote",
        heading: "Limitation",
        lines: ["Mobility does not replace planning. It only makes bad planning happen faster."]
      }
    ]
  },
  {
    slug: "millie",
    name: "Millie",
    tagline: "STAND USER",
    quote: "“Speed and perception, hard to track.”",
    labels: ["ROLEPLAY"],
    sections: [
      {
        type: "stats",
        stats: [
          ["ROLE", "Stand user"],
          ["ABILITY CLASS", "Speed and perception"]
        ]
      },
      {
        type: "text",
        paragraphs: [
          "Millie’s Stand can double her movement speed and produce perception effects that make her difficult to track."
        ]
      },
      {
        type: "list",
        heading: "Tactical use",
        items: ["rapid delivery", "target confusion", "evacuation", "battlefield repositioning"]
      },
      {
        type: "quote",
        heading: "Limitation",
        lines: ["Extended use makes coordinated movement difficult for allies who cannot follow her timing."]
      }
    ]
  },
  {
    slug: "ivypool",
    name: "Ivypool",
    tagline: "HAZMAT SPECIALIST",
    quote: "“Personal resistance doesn’t make the plants safe for anyone else.”",
    labels: ["ROLEPLAY"],
    sections: [
      {
        type: "stats",
        stats: [
          ["ROLE", "Hazardous-material specialist"],
          ["ABILITY CLASS", "Venom and plant resistance"]
        ]
      },
      {
        type: "text",
        paragraphs: [
          "Ivypool can safely handle plants that would endanger other cats. This makes her valuable during medicine-den emergencies and unfamiliar expeditions."
        ]
      },
      {
        type: "list",
        heading: "Tactical use",
        items: ["poisonous plant removal", "herb recovery", "contaminated-area access", "medicine-den support"]
      },
      {
        type: "quote",
        heading: "Limitation",
        lines: ["Personal resistance does not make the surrounding plants safe for anyone else."]
      }
    ]
  },
  {
    slug: "berrynose",
    name: "Berrynose",
    tagline: "HEAVY SPECIALIST · COMEDY TARGET",
    quote: "“His abilities are useful. His proximity to my repaired property is not.”",
    labels: ["ROLEPLAY"],
    sections: [
      {
        type: "stats",
        stats: [
          ["ROLE", "Heavy physical specialist"],
          ["ABILITY CLASS", "Reinforced claws and teeth"],
          ["SECONDARY ROLE", "Comedy target"]
        ]
      },
      {
        type: "text",
        paragraphs: [
          "Berrynose can cut through heavy practice material with exceptional precision. He also appears repeatedly in punishment scenarios involving broken objects and cursed fandom content."
        ]
      },
      {
        type: "list",
        heading: "Tactical use",
        items: ["obstacle removal", "structural access", "defensive cutting", "controlled demolition"]
      },
      {
        type: "quote",
        heading: "Jayfeather’s note",
        lines: ["“His abilities are useful. His proximity to my repaired property is not.”"]
      }
    ]
  }
];
