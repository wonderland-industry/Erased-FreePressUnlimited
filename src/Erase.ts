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
if (
  !process.env.LANG_RU &&
  !process.env.LANG_NL &&
  !process.env.LANG_FR &&
  !process.env.LANG_ES &&
  !process.env.LANG_EN &&
  !process.env.LANG_AR
) {
  require("./styles/erased.css");
}

export class Erase {
  private value: boolean = false;
  private context: Element;
  private elements: Array<HTMLElement>;

  constructor({
    context = document.body,
    selector = "erase",
    ignore = "erase-ignore",
    initialState = false,
  }: {
    context: Element;
    selector: string;
    ignore: string;
    initialState?: boolean;
  }) {
    this.context = context;
    this.fillElements(selector);
    this.ignore(ignore);
    this.include(selector);
    this.ligeratures = !!initialState;
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
    const nodes: NodeListOf<HTMLElement> = this.context.querySelectorAll(
      `[data-${selector}]`
    );
    const array: Array<HTMLElement> = Array.from(nodes);

    for (
      let index = 0, styles = null, limit = array.length;
      index < limit;
      index++
    ) {
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
    const nodes: NodeListOf<HTMLElement> = this.context.querySelectorAll(
      `[data-${selector}]`
    );
    const array: Array<HTMLElement> = Array.from(nodes);
    for (let index = 0, limit = array.length; index < limit; index++) {
      const computed = window.getComputedStyle(array[index]);
      array[index].setAttribute(
        "data-erase-initial-family",
        computed.getPropertyValue("font-family")
      );
      array[index].setAttribute(
        "data-erase-initial-feature",
        computed.getPropertyValue("font-feature-settings")
      );
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
    const nodes: NodeListOf<HTMLElement> = this.context.querySelectorAll(
      `[data-${selector}]`
    );
    const array: Array<HTMLElement> = Array.from(nodes);
    this.elements = array;
  }

  /**
   *
   * Update ligeratures.
   */
  update() {
    for (let index = 0, limit = this.elements.length; index < limit; index++) {
      if (this.ligeratures) {
        this.elements[index].style.fontFamily = "The Erased";
        this.elements[index].style.fontFeatureSettings = `"liga" on`;
      } else {
        this.elements[index].style.fontFamily =
          this.elements[index].getAttribute("data-erase-initial-family") ?? "";
        this.elements[index].style.fontFeatureSettings =
          this.elements[index].getAttribute("font-feature-settings") ?? "";
      }
    }
  }
}

export default Erase;
