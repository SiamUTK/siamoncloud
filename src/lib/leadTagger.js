// Siam On Cloud Lead Tagger Utility
// Lightweight intent/tag detection for CRM pipeline

const KEYWORDS = [
  { kw: ["price", "ราคา"], tag: "asking_price", intent: "quote" },
  { kw: ["promo", "โปร"], tag: "promo_interest", intent: "promo" },
  { kw: ["help", "support"], tag: "support_request", intent: "support" },
];

export function leadTagger(message = "") {
  const text = (message || "").toLowerCase().normalize("NFKC");
  const tags = [];
  let intent = "general";

  for (const { kw, tag, intent: kwIntent } of KEYWORDS) {
    for (const k of kw) {
      if (text.includes(k)) {
        tags.push(tag);
        intent = kwIntent;
      }
    }
  }

  if (tags.length > 0) {
    tags.push("high_intent");
  }

  return { intent, tags };
}
