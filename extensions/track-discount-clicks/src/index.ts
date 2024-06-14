import { register } from "@shopify/web-pixels-extension";

register(({ analytics, browser, init, settings }) => {
  /**
   * currently i don't have any third party script
   */
  analytics.subscribe("all_events", (event) => {
    console.log("fired", event);
    if (event.type === "dom") {
      if (event.data.element.id === "summary_apply_discount") {
        console.log("tracking the apply discount clicks");
      }
    }
  });
});
