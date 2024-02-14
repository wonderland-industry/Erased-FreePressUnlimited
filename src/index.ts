import { Erase } from "./Erase";
import { Banner } from "./Banner";

import template from "./template";
import config from "./config";

/**
 *
 * Initialise erase.js with the
 * default values.
 */
const erase = new Erase({
  context: document.body,
  selector: "erase",
  ignore: "erase-ignore",
  initialState: false,
});

/**
 * Only show banner when
 * elements with the
 * data-erase attribute are
 * found on the page.
 */
if (erase.hasElements) {
  /**
   * Create MOUNT element and
   * appends it to the body.
   */
  const MOUNT = document.createElement("div");
  MOUNT.setAttribute("data-erase-ignore", "");
  document.body.appendChild(MOUNT);

  /**
   * Initialize HTML parser, template
   * function is rendered to HTML and
   * injected in the MOUNT element.
   */
  const banner = new Banner({ element: MOUNT, template, initialState: false });
  banner.render(config);

  /**
   * Set state on checkbox change.
   */
  banner.elements.checkbox.addEventListener("change", () => {
    const active = (banner.elements.checkbox as HTMLInputElement).checked;
    erase.ligeratures = active;
    banner.setLigeratures(active);
  });
}
