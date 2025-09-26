export const GA_MEASUREMENT_ID = "Tjf1ojdNT1i0BfBho97LWA";
export const pageview = (url: string) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
