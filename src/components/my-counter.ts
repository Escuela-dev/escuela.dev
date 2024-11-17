import { LitElement, html } from 'lit';

import { property, customElement } from 'lit/decorators.js';

export class MyCounter extends LitElement {
  static properties = {count: {type: String}}

  constructor() {

    super();

    this.count =0

  }
  declare private count;

  increment() {
    this.count++;
  }

  render() {
    return html`
      <div>
        <p>Count: ${this.count}</p>

        <button type="button" @click=${this.increment}>Increment</button>
      </div>
    `;
  }
}

customElements.define('my-counter', MyCounter);
