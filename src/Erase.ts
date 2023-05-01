if (process.env.LANG_EN) {
  require("./styles/erased.en.css");
}
if (process.env.LANG_ES) {
  require("./styles/erased.es.css");
}
if (process.env.LANG_FR) {
  require("./styles/erased.fr.css");
}
if (process.env.LANG_NL) {
  require("./styles/erased.nl.css");
}
if (process.env.LANG_RU) {
  require("./styles/erased.ru.css");
}
if (process.env.LANG_AR) {
  require("./styles/erased.ar.css");
}
if (!process.env.LANG_RU && !process.env.LANG_NL && !process.env.LANG_FR && !process.env.LANG_ES && !process.env.LANG_EN && !process.env.LANG_AR) {
  require("./styles/erased.css");
}

export class Erase {
  private value: boolean;
  private context: Element;
  private elements: Array<HTMLElement>;

  constructor({ context = document.body, selector = "erase", ignore = "erase-ignore" }: { context: Element; selector: string; ignore: string }) {
    this.context = context;
    this.fillElements(selector);
    this.ignore(ignore);
    this.include(selector);
  }

  get hasElements(): boolean {
    return this.elements.length > 0;
  }

  public set ligeratures(value: boolean) {
    this.value = value;
    this.update();
  }

  public get ligeratures() {
    return this.value;
  }

  /**
   *
   * Adds the computed font
   * style as inline style.
   *
   * @param selector the ignore data selector.
   */
  private ignore(selector: string) {
    const nodes: NodeListOf<HTMLElement> = this.context.querySelectorAll(`[data-${selector}]`);
    const array: Array<HTMLElement> = Array.from(nodes);

    for (let index = 0, styles = null, limit = array.length; index < limit; index++) {
      styles = window.getComputedStyle(array[index]);
      array[index].style.fontFamily = styles.getPropertyValue("font-family");
    }
  }

  /**
   *
   * Adds initial styling
   * that have the data-erase
   * selector.
   *
   * @param selector the erase selector
   */
  private include(selector: string) {
    const nodes: NodeListOf<HTMLElement> = this.context.querySelectorAll(`[data-${selector}]`);
    const array: Array<HTMLElement> = Array.from(nodes);

    for (let index = 0, limit = array.length; index < limit; index++) {
      array[index].style.fontFamily = "The Erased";
      array[index].style.fontFeatureSettings = `"liga" off`;
    }
  }

  /**
   *
   * Selects all the elements
   * that have the data-erase
   * attribute.
   *
   * @param selector the erase selector
   */
  private fillElements(selector: string) {
    const nodes: NodeListOf<HTMLElement> = this.context.querySelectorAll(`[data-${selector}]`);
    const array: Array<HTMLElement> = Array.from(nodes);
    this.elements = array;
  }

  /**
   *
   * Update ligeratures.
   */
  update() {
    const value = this.ligeratures ? "on" : "off";
    for (let index = 0, limit = this.elements.length; index < limit; index++) {
      this.elements[index].style.fontFeatureSettings = `"liga" ${value}`;
    }
  }
}

export default Erase;
