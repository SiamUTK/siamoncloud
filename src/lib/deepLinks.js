// Siam On Cloud Deep Link Generator
// Generates contact links for LINE OA, etc.

export function generateContactLink({ intent, route, source }) {
  const url = new URL(window.location.origin + "/contact");
  if (intent) url.searchParams.set("intent", intent);
  if (route) url.searchParams.set("route", route);
  if (source) url.searchParams.set("source", source);
  return url.toString();
}
