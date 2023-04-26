interface TemplateAttributes {
  [key: string]: string | number | boolean;
}

interface TemplateOptions {
  selector: string;
}

type Template = (attributes: TemplateAttributes, options: TemplateOptions) => string;

export class Parser {
  private element: HTMLElement;
  private selector: string;
  private template: Template;

  public elements: any;

  constructor({ element, template, selector = "select" }: { element: HTMLElement; template: Template; selector?: string }) {
    this.element = element;
    this.selector = selector;
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
    this.element.innerHTML = this.template(attributes, { selector: this.selector });
    this.fillElements();
  }

  public destroy() {
    this.element.innerHTML = "";
    this.elements = [];
  }
  /**
   * Binds the nodes selected
   * with [data-{selector}] to
   * the class.
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
