import { register } from "@shopify/web-pixels-extension";
import { sendEventData } from "./services/track";
register(({ analytics, browser, init, settings }) => {
  /**
   * currently i don't have any third party script
   */
  analytics.subscribe("all_events", (event) => {
    if (event.type === "dom") {
      if (event.data.element.id === "summary_apply_discount") {
        console.log("fired", event);
        sendEventData("discount_applied");
      }
    }
  });
});
