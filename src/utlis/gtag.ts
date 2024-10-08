export const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;

export const pageview = (url: string) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
export const event = ({ action, category, label, value }: any) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
export function preview(url: string) {
  throw new Error("Function not implemented.");
}
