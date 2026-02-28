// Siam On Cloud Lead Scoring Utility
// Lightweight rule-based scoring for CRM pipeline

export function leadScoring({
  intent,
  route,
  message,
  phone,
  returningVisitor,
}) {
  let score = 0;
  if (intent === "quote") score += 40;
  if (route) score += 25;
  if (message && message.length > 50) score += 15;
  if (phone) score += 10;
  if (returningVisitor) score += 5;
  let priority = "low";
  if (score >= 70) priority = "high";
  else if (score >= 40) priority = "medium";
  return { lead_score: score, priority };
}
