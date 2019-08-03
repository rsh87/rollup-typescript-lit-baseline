import { LitElement, html, customElement, property } from "lit-element";

@customElement("simple-greeting")
export class SimpleGreeting extends LitElement {
  @property() name = "World!!";

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
    `;
  }
}
