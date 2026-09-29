// GA4 custom event helpers
// Usage: import { trackEvent } from "@/lib/analytics"
// These fire gtag events on top of GA4's built-in Enhanced Measurement.
// Do NOT duplicate events that Enhanced Measurement already captures automatically
// (page_view, scroll, outbound_click, etc.).

declare function gtag(...args: unknown[]): void;

function sendEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (typeof gtag === "undefined") return;
  gtag("event", eventName, params);
}

// -- Conversion events (activate when ready) --

// export function trackWhatsappClick(source?: string) {
//   sendEvent("whatsapp_click", { event_category: "engagement", source });
// }

// export function trackFreeAnalysisClick(location?: string) {
//   sendEvent("free_analysis_click", { event_category: "conversion", location });
// }

// export function trackFormSubmit(service?: string) {
//   sendEvent("form_submit", { event_category: "conversion", service });
// }

// export function trackPhoneClick() {
//   sendEvent("phone_click", { event_category: "engagement" });
// }

// Internal helper exported for future use
export { sendEvent };
