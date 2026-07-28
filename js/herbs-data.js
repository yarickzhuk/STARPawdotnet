// Shared herb item content — used by herbs.html (inventory) and herb.html (detail).
// Full content transcribed from firstversioncontent.md sections 12.2-12.6.
window.STARPAW_HERBS_DATA = [
  {
    slug: "catmint",
    name: "Catmint",
    labels: ["ITEM DATABASE", "CANON-INSPIRED"],
    sections: [
      {
        type: "stats",
        stats: [
          ["ITEM", "Catmint"],
          ["TYPE", "Emergency healing herb"],
          ["RARITY", "Legendary"],
          ["SEASONAL AVAILABILITY", "Limited"],
          ["STACK LIMIT", "Controlled reserve"],
          ["TRADE VALUE", "Extreme"]
        ]
      },
      {
        type: "text",
        heading: "Fictional effect",
        paragraphs: ["Primary medicine-cat resource used during greencough outbreaks."]
      },
      {
        type: "stats",
        heading: "Strategic effect",
        stats: [
          ["", "+80 outbreak stability"],
          ["", "+300% diplomatic attention"],
          ["", "+1 emergency meeting per neighboring Clan"]
        ]
      },
      {
        type: "text",
        heading: "Economy",
        paragraphs: [
          "Catmint becomes more valuable as other Clans’ supplies decline. A large reserve can protect ThunderClan, support neighboring Clans, or become diplomatic leverage."
        ]
      },
      {
        type: "quote",
        heading: "Jayfeather’s review",
        lines: ["“It is medicine, not currency.”", "“Unfortunately, scarcity disagrees.”"]
      },
      {
        type: "quote",
        heading: "Item warning",
        lines: ["Hoarding protects one Clan until the sickness crosses the border anyway."]
      }
    ]
  },
  {
    slug: "marigold",
    name: "Marigold",
    labels: ["ITEM DATABASE"],
    sections: [
      {
        type: "stats",
        stats: [
          ["ITEM", "Marigold"],
          ["TYPE", "Basic healing item"],
          ["RARITY", "Common"],
          ["ROLE", "Early-game medicine-cat inventory"]
        ]
      },
      {
        type: "stats",
        heading: "Fictional effect",
        stats: [
          ["", "+15 wound-care support"],
          ["", "+5 apprentice confidence"],
          ["", "-10 excitement after the fifth use"]
        ]
      },
      {
        type: "text",
        heading: "Description",
        paragraphs: [
          "A reliable low-level healing item. It lacks legendary status, political importance, and a dramatic trade economy. This is why it is useful."
        ]
      },
      {
        type: "quote",
        heading: "Jayfeather’s review",
        lines: ["“It works. That is a better feature than glowing.”"]
      }
    ]
  },
  {
    slug: "juniper-berries",
    name: "Juniper Berries",
    labels: ["ITEM DATABASE"],
    sections: [
      {
        type: "stats",
        stats: [
          ["ITEM", "Juniper Berries"],
          ["TYPE", "Consumable support item"],
          ["RARITY", "Uncommon"],
          ["REGIONAL CONTROL", "WindClan has suspiciously good access"]
        ]
      },
      {
        type: "stats",
        heading: "Fictional effect",
        stats: [
          ["", "+10 breathing support"],
          ["", "+5 travel readiness"],
          ["", "+20 arguments about resource ownership"]
        ]
      },
      {
        type: "text",
        heading: "Description",
        paragraphs: [
          "A useful consumable that becomes much more interesting when the inventory screen reveals another Clan owns most of it."
        ]
      },
      {
        type: "quote",
        heading: "Jayfeather’s review",
        lines: ["“No, you may not invade WindClan because their item drops are better.”"]
      }
    ]
  },
  {
    slug: "cobwebs",
    name: "Cobwebs",
    labels: ["ITEM DATABASE"],
    sections: [
      {
        type: "stats",
        stats: [
          ["ITEM", "Cobwebs"],
          ["TYPE", "Medical material"],
          ["RARITY", "Common"],
          ["EQUIPMENT SLOT", "Wound covering"]
        ]
      },
      {
        type: "stats",
        heading: "Fictional effect",
        stats: [
          ["", "+20 wound stability"],
          ["", "-5 movement if applied badly"],
          ["", "+30 irritation if the spider is still present"]
        ]
      },
      {
        type: "list",
        heading: "Variants",
        items: ["Standard Cobweb", "Premium Cobweb", "Haunted Cobweb"]
      },
      {
        type: "text",
        paragraphs: ["Premium Cobweb and Haunted Cobweb have no additional medical benefit."]
      },
      {
        type: "quote",
        heading: "Jayfeather’s review",
        lines: ["“The spider does not make it premium.”"]
      }
    ]
  },
  {
    slug: "icelandic-moss",
    name: "Prepared Icelandic Moss",
    labels: ["ITEM DATABASE"],
    sections: [
      {
        type: "stats",
        stats: [
          ["ITEM", "Prepared Icelandic Moss"],
          ["TYPE", "Support treatment"],
          ["RARITY", "Rare"],
          ["PREPARATION REQUIREMENT", "High"],
          ["REPLACEMENT FOR CATMINT", "No"]
        ]
      },
      {
        type: "stats",
        heading: "Fictional effect — Raw",
        stats: [
          ["", "+3 throat comfort"],
          ["", "-10 confidence in the apprentice who served it"]
        ]
      },
      {
        type: "stats",
        heading: "Fictional effect — Prepared",
        stats: [
          ["", "+15 throat comfort"],
          ["", "+10 patient calm"],
          ["", "+5 early-stage breathing support"]
        ]
      },
      {
        type: "text",
        heading: "Description",
        paragraphs: [
          "Raw preparation produces weak support. Careful preparation turns the item into a more reliable soothing treatment, though it does not replace catmint."
        ]
      },
      {
        type: "quote",
        heading: "Jayfeather’s verdict",
        lines: ["“You didn’t discover a miracle cure.”", "“You discovered how not to ruin a good herb.”"]
      }
    ]
  }
];
