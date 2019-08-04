import { LitElement, html, customElement, property } from "lit-element";

@customElement("simple-greeting")
export class SimpleGreeting extends LitElement {
  @property() name = "my-element.ts";

  render() {
    return html`
      <p>Hello from ${this.name}</p>
    `;
  }
}
