import { Erase } from "./Erase";
import config from "./config";

const MOUNT = document.createElement("div");
document.body.appendChild(MOUNT);

const erase = new Erase({ selector: "erase", config });

erase.mount({ element: MOUNT });
erase.open();
