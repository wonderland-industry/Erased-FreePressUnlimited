interface TemplateAttributes {
  [key: string]: string | number | boolean;
}

type Template = (attributes: TemplateAttributes) => string;

export class Parser {
  public elements: any;
  private element: HTMLElement;
  private template: Template;

  constructor({ element, template }: { element: HTMLElement; template: Template }) {
    this.element = element;
    this.template = template;
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
    this.element.innerHTML = this.template(attributes);
    this.fillElements();
  }

  public destroy() {
    this.element.innerHTML = "";
    this.elements = [];
  }
  /**
   * Binds the nodes selected
   * with [data-select] to the
   * class.
   */
  private fillElements() {
    const nodes: NodeListOf<HTMLElement> = this.element.querySelectorAll("[data-select]");
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

export default Parser;
