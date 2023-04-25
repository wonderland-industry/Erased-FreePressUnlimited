import { Parser } from "./parser";
import template from "./template";

import "./styles/erased.css";
// @ts-ignore
import styles from "./styles/banner.module.css";

interface ConstructorAttributes {
  selector: string;
  config: { [key: string]: string | number };
}

interface MountAttributes {
  element: HTMLElement;
}

export class Erase {
  public enabled: boolean = false;
  public parser: Parser;
  public selector: string;
  public config: { [key: string]: string | number };

  /**
   * @param selector String on what element effect needs to be applied.
   * @param config Object with template config.
   */
  constructor({ selector, config }: ConstructorAttributes) {
    this.selector = selector;
    this.config = config;
  }

  /**
   * Mounts banners to DOM, initializes
   * font and listeners.
   *
   * @param element Mount element for banner.
   */
  public mount({ element }: MountAttributes): void {
    this.parser = new Parser({ element, template: template });
    this.parser.render({ ...this.config, visible: false });

    /**
     *
     * Fonts
     */
    this.ignoreFont();
    this.setFont();
    this.setFontLigatures("off");

    /**
     *
     * Events
     */
    this.parser.elements.button.addEventListener("click", this.handleClick);
  }

  /**
   *
   * Unmounts banner and removes
   * inline font styles.
   */
  public unmount() {
    this.parser.destroy();

    // @todo remove inline font styles.
  }

  /**
   *
   * Shows the banner with
   * transition in animation.
   */
  public open() {
    this.parser.elements.container.classList.add(styles.visible);
  }

  /**
   *
   * Hides the banner with
   * transition out animation.
   */
  public close() {
    this.parser.elements.container.classList.remove(styles.visible);
  }

  public enable() {
    this.enabled = true;
    this.setFontLigatures("on");
  }

  public disable() {
    this.enabled = false;
    this.setFontLigatures("off");
  }

  private getArrayBySelector(selector: string) {
    const nodes: NodeListOf<HTMLElement> = document.body.querySelectorAll(selector);
    const array: Array<HTMLElement> = Array.from(nodes);
    return array;
  }

  /**
   *
   * Add original Font Family to the
   * ignored elements.
   */
  private ignoreFont() {
    const array = this.getArrayBySelector(`[data-${this.selector}-ignore]`);

    let styles;
    let fontFamily;
    let index = array.length;

    while (index--) {
      styles = window.getComputedStyle(array[index]);
      fontFamily = styles.getPropertyValue("font-family");
      array[index].style.fontFamily = fontFamily;
    }
  }

  /**
   *
   * Add the Erased Font Family to
   * the selected elements.
   */
  private setFont() {
    const array = this.getArrayBySelector(`[data-${this.selector}]`);

    let index = array.length;

    while (index--) {
      array[index].style.fontFamily = "The Erased";
    }
  }

  /**
   *
   * Updates the Font Feature Settings
   * ligatures.
   */
  private setFontLigatures(value: "on" | "off") {
    const nodes: NodeListOf<HTMLElement> = document.body.querySelectorAll(`[data-${this.selector}]`);
    const array: Array<HTMLElement> = Array.from(nodes);

    let index = array.length;

    while (index--) {
      array[index].style.fontFeatureSettings = `"liga" ${value}`;
    }
  }

  private handleClick = () => {
    if (!this.enabled) {
      this.enable();
    } else {
      this.disable();
    }
  };
}

export default Erase;
