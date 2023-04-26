import { Erase } from "./Erase";
import { Parser } from "./Parser";

import template from "./template";
import config from "./config";

const MOUNT = document.createElement("div");
document.body.appendChild(MOUNT);

const parser = new Parser({ element: MOUNT, template: template });
parser.render(config);

const erase = new Erase({
  context: document.body,
  selector: "erase",
  ignore: "erase-ignore",
});

parser.elements.checkbox.addEventListener("change", () => {
  erase.ligeratures = !erase.ligeratures;
});
