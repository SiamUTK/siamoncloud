// Siam On Cloud Lead Lifecycle Engine
// Pure functions for CRM pipeline

export function computeInitialStage(lead) {
  if (lead.intent === "quote") return "new";
  return "lead";
}

export function computePriority(lead) {
  if (lead.lead_score >= 60) return "high";
  if (lead.lead_score >= 40) return "medium";
  return "low";
}

export function computeFollowupDue(lead) {
  const now = new Date();
  let ms = 24 * 60 * 60 * 1000; // default 24h
  const priority = computePriority(lead);
  if (priority === "high") ms = 2 * 60 * 60 * 1000;
  else if (priority === "medium") ms = 12 * 60 * 60 * 1000;
  return new Date(now.getTime() + ms).toISOString();
}
