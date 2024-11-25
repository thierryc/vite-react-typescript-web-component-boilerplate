export class CustomCounter extends HTMLElement {
  private count = 0;
  private button: HTMLButtonElement;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.button = document.createElement('button');
    this.button.className = 'counter-button';
    this.updateButtonText();

    this.button.addEventListener('click', () => {
      this.count++;
      this.updateButtonText();
      this.dispatchEvent(new CustomEvent('countChange', { detail: this.count }));
    });

    const style = document.createElement('style');
    style.textContent = `
      .counter-button {
        padding: 0.5rem 1rem;
        background-color: var(--color-primary, #3b82f6);
        color: white;
        border: none;
        border-radius: var(--radius-sm, 0.375rem);
        cursor: pointer;
        font-size: var(--font-size-sm, 0.875rem);
        transition: background-color 0.2s;
      }
      .counter-button:hover {
        background-color: var(--color-primary-dark, #2563eb);
      }
    `;

    this.shadowRoot?.appendChild(style);
    this.shadowRoot?.appendChild(this.button);
  }

  private updateButtonText() {
    this.button.textContent = `Count: ${this.count}`;
  }

  get value() {
    return this.count;
  }

  set value(newValue: number) {
    this.count = newValue;
    this.updateButtonText();
  }
}

customElements.define('custom-counter', CustomCounter);