import { Erase } from "./Erase";
import { Parser } from "./Parser";

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
});

/**
 *
 * Only show banner when
 * data-erase attribute is
 * ont the page
 */
if (erase.hasElements) {
  /**
   *
   * Create MOUNT element and
   * appends it to the body.
   */
  const MOUNT = document.createElement("div");
  document.body.appendChild(MOUNT);

  /**
   *
   * Initialize HTML parser, template
   * function is rendered to HTML and
   * injected in the MOUNT element.
   */
  const parser = new Parser({ element: MOUNT, template });
  parser.render(config);

  /**
   *
   * Set initial state.
   */
  erase.ligeratures = parser.elements.checkbox.checked;

  /**
   *
   * Set state on checkbox change.
   */
  parser.elements.checkbox.addEventListener("change", () => {
    erase.ligeratures = parser.elements.checkbox.checked;
  });
}
