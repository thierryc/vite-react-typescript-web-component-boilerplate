import css from './CustomCounter.css?inline'; // Inline CSS with Vite

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
    style.textContent = css;

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