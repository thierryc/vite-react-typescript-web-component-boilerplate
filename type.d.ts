import React from 'react';

declare global {
    namespace JSX {
      interface IntrinsicElements {
        'custom-counter': React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        > & {
          ref?: React.Ref<HTMLElement>;
        };
      }
    }
  }

// Ensure the module can be augmented
export {};