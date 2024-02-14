import { TemplateAttributes, TemplateOptions } from "./template";

export type Template = (
  attributes: TemplateAttributes,
  options: TemplateOptions
) => string;

export class Banner {
  private element: HTMLElement;
  private selector: string;
  private template: Template;
  private initialState: boolean;

  public elements: Record<string, HTMLElement>;

  constructor({
    element,
    template,
    selector = "select",
    initialState = false,
  }: {
    element: HTMLElement;
    template: Template;
    selector?: string;
    initialState?: boolean;
  }) {
    this.element = element;
    this.selector = selector;
    this.template = template;
    this.initialState = initialState;
    this.setLigeratures(initialState);
  }

  /**
   * Renders template to HTML
   * injects the variables.
   *
   * Binds the nodes selected
   * with [data-select] to the
   * class.
   *
   * @param attributes Object with template variables
   */
  public render(attributes: TemplateAttributes) {
    this.element.innerHTML = this.template(attributes, {
      selector: this.selector,
      initialState: this.initialState,
    });

    this.fillElements();

    this.elements?.handle?.addEventListener("click", () => {
      if (this.element.hasAttribute("data-closed")) {
        this.element.removeAttribute("data-closed");
      } else {
        this.element.setAttribute("data-closed", "");
      }
    });
  }

  public destroy() {
    this.element.innerHTML = "";
    this.elements = {};
  }

  public setLigeratures(value: boolean) {
    if (value) {
      this.element.setAttribute("data-ligeratures", "");
    } else {
      this.element.removeAttribute("data-ligeratures");
    }
  }

  /**
   * Binds the nodes selected
   * with [data-{selector}] to
   * the class.
   */
  private fillElements() {
    const nodes: NodeListOf<HTMLElement> =
      this.element.querySelectorAll("[data-select]");
    const array: Array<HTMLElement> = Array.from(nodes);
    const object: { [key: string]: HTMLElement } = {};

    this.elements = array.reduce((object, node) => {
      if (node.dataset.select !== undefined) {
        object[node.dataset.select] = node;
      }
      return object;
    }, object);
  }
}

export default Banner;
