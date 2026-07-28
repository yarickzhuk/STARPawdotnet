// Vitrage v2 — character portrait icons for the arch-clipped .portrait-frame.
//
// These are hand-built flat SVG "stained glass" icons, not photographic or
// AI-generated raster art: this build pass had no image-generation tool
// available, and flat vector shapes with thick black leading are arguably
// closer to the brief's actual stained-glass reference than a photoreal
// render would be anyway. Where the final portraits come from long-term
// (commission / AI / collage) is still an open human decision — see
// DESIGN.md "Portraits" and HANDOFF.md's D-01 open question. Swapping a
// real raster image in later just means replacing the contents of
// .portrait-frame; nothing structural depends on these being SVG.
window.STARPAW_PORTRAITS = (function () {
  // Frontal, flat, icon-like: no perspective, thick outline, single light
  // source implied by a top highlight — consistent with every bespoke
  // portrait below.

  function jayfeather() {
    // Near-monochrome slate. Blind gaze: pupils drawn off-center/upward,
    // never toward the viewer — a deliberate choice, not a missing detail.
    return (
      '<svg viewBox="0 0 200 200" role="img" aria-label="Jayfeather, drawn frontally in near-monochrome slate glass, gaze directed past the viewer">' +
      '<circle cx="100" cy="100" r="92" fill="none" stroke="#454857" stroke-width="4"/>' +
      '<path d="M40 150 L60 60 L100 100 L140 60 L160 150 Q100 185 40 150 Z" fill="#2a2c33" stroke="#050506" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M52 66 L34 22 L74 54 Z" fill="#2a2c33" stroke="#050506" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M148 66 L166 22 L126 54 Z" fill="#2a2c33" stroke="#050506" stroke-width="5" stroke-linejoin="round"/>' +
      '<ellipse cx="76" cy="108" rx="9" ry="11" fill="#c9ccd6"/>' +
      '<ellipse cx="124" cy="108" rx="9" ry="11" fill="#c9ccd6"/>' +
      '<circle cx="72" cy="100" r="2.6" fill="#454857"/>' +
      '<circle cx="120" cy="100" r="2.6" fill="#454857"/>' +
      '<path d="M92 128 L108 128 L100 138 Z" fill="#454857"/>' +
      '<path d="M60 140 Q100 152 140 140" fill="none" stroke="#050506" stroke-width="3"/>' +
      "</svg>"
    );
  }

  function starpaw() {
    // The window behind him has already cracked — radiating lead lines
    // instead of a whole halo.
    return (
      '<svg viewBox="0 0 200 200" role="img" aria-label="Starpaw, drawn frontally with the glass pattern behind him already cracked apart">' +
      '<g stroke="var(--herbs)" stroke-width="2.5" opacity="0.8">' +
      '<line x1="100" y1="100" x2="30" y2="30"/><line x1="100" y1="100" x2="170" y2="30"/>' +
      '<line x1="100" y1="100" x2="20" y2="110"/><line x1="100" y1="100" x2="180" y2="110"/>' +
      '<line x1="100" y1="100" x2="60" y2="185"/><line x1="100" y1="100" x2="140" y2="185"/>' +
      "</g>" +
      '<path d="M42 152 L58 58 L100 96 L142 58 L158 152 Q100 184 42 152 Z" fill="#241a2e" stroke="#050506" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M54 64 L38 18 L78 50 Z" fill="#241a2e" stroke="#050506" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M146 64 L162 18 L122 50 Z" fill="#241a2e" stroke="#050506" stroke-width="5" stroke-linejoin="round"/>' +
      '<ellipse cx="78" cy="104" rx="10" ry="12" fill="var(--herbs)"/>' +
      '<ellipse cx="122" cy="104" rx="10" ry="12" fill="var(--herbs)"/>' +
      '<circle cx="78" cy="104" r="3.2" fill="#1a1024"/>' +
      '<circle cx="122" cy="104" r="3.2" fill="#1a1024"/>' +
      '<path d="M90 132 L110 132 L100 144 Z" fill="#1a1024"/>' +
      "</svg>"
    );
  }

  function steelpaw() {
    // Cold metallic tones deliberately out of step with the rest of the
    // (warm) glass — that contrast is the whole point of the character.
    return (
      '<svg viewBox="0 0 200 200" role="img" aria-label="Steelpaw, drawn in cold metallic tones against a warm frame">' +
      '<circle cx="100" cy="100" r="92" fill="none" stroke="#8fa3ad" stroke-width="4" stroke-dasharray="10 6"/>' +
      '<path d="M40 150 L60 60 L100 98 L140 60 L160 150 Q100 184 40 150 Z" fill="#3b4750" stroke="#050506" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M52 66 L34 20 L74 52 Z" fill="#3b4750" stroke="#050506" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M148 66 L166 20 L126 52 Z" fill="#3b4750" stroke="#050506" stroke-width="5" stroke-linejoin="round"/>' +
      '<ellipse cx="76" cy="106" rx="9" ry="11" fill="#cfe3ea"/>' +
      '<ellipse cx="124" cy="106" rx="9" ry="11" fill="#cfe3ea"/>' +
      '<circle cx="76" cy="106" r="3" fill="#1c262b"/>' +
      '<circle cx="124" cy="106" r="3" fill="#1c262b"/>' +
      '<path d="M92 130 L108 130 L100 140 Z" fill="#1c262b"/>' +
      '<path d="M60 142 Q100 150 140 142" fill="none" stroke="#050506" stroke-width="3"/>' +
      "</svg>"
    );
  }

  function millie() {
    // Warmest, calmest palette in the set — and a total, blissful lack of
    // awareness of whatever is happening around her.
    return (
      '<svg viewBox="0 0 200 200" role="img" aria-label="Millie, drawn in the warmest, calmest tones, eyes closed and untroubled">' +
      '<circle cx="100" cy="100" r="92" fill="none" stroke="var(--atlas)" stroke-width="6"/>' +
      '<path d="M40 150 L60 58 L100 98 L140 58 L160 150 Q100 186 40 150 Z" fill="#5c4326" stroke="#050506" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M52 64 L34 16 L74 50 Z" fill="#5c4326" stroke="#050506" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M148 64 L166 16 L126 50 Z" fill="#5c4326" stroke="#050506" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M64 106 Q76 96 88 106" fill="none" stroke="#1a1206" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M112 106 Q124 96 136 106" fill="none" stroke="#1a1206" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M84 132 Q100 142 116 132" fill="none" stroke="#050506" stroke-width="3" stroke-linecap="round"/>' +
      "</svg>"
    );
  }

  // Generic frontal roundel for every roster member without bespoke
  // iconography — tinted with the page's ambient accent rather than left
  // as a broken-image hole. Degrades gracefully per DESIGN.md.
  function generic(name) {
    return (
      '<svg viewBox="0 0 200 200" role="img" aria-label="' + name + ', drawn as a flat frontal glass silhouette">' +
      '<circle cx="100" cy="100" r="92" fill="none" stroke="var(--accent)" stroke-width="4" opacity="0.6"/>' +
      '<path d="M46 148 L64 64 L100 100 L136 64 L154 148 Q100 178 46 148 Z" fill="var(--panel-2)" stroke="#050506" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M58 70 L42 26 L80 56 Z" fill="var(--panel-2)" stroke="#050506" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M142 70 L158 26 L120 56 Z" fill="var(--panel-2)" stroke="#050506" stroke-width="5" stroke-linejoin="round"/>' +
      '<ellipse cx="80" cy="106" rx="8" ry="10" fill="var(--accent)"/>' +
      '<ellipse cx="120" cy="106" rx="8" ry="10" fill="var(--accent)"/>' +
      "</svg>"
    );
  }

  var BUILDERS = {
    jayfeather: jayfeather,
    starpaw: starpaw,
    steelpaw: steelpaw,
    millie: millie
  };

  function render(slug, displayName) {
    var builder = BUILDERS[slug];
    return builder ? builder() : generic(displayName || slug);
  }

  return { render: render };
})();
