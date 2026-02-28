// Siam On Cloud Follow-up Intelligence Utils
// Framework-agnostic helpers for CRM/dashboard

export function isFollowupDue(lead) {
  if (!lead.followup_due_at) return false;
  return new Date(lead.followup_due_at) <= new Date();
}

export function isHighPriority(lead) {
  return lead.priority === "high";
}

export function formatLeadSummary(lead) {
  return `${lead.name || "(no name)"} | ${lead.intent || "intent?"} | ${lead.priority || "priority?"} | ${lead.conversion_stage || "stage?"}`;
}
