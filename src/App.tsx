import { useEffect, useRef, useState } from 'react';
import './components/CustomCounter';

export default function App() {
  const [webComponentCount, setWebComponentCount] = useState(0);
  const counterRef = useRef<HTMLElement & { value: number }>(null);

  useEffect(() => {
    const counter = counterRef.current;
    if (!counter) return;

    const handleCountChange = (e: CustomEvent) => {
      setWebComponentCount(e.detail);
    };

    counter.addEventListener('countChange', handleCountChange as EventListener);
    return () => {
      counter.removeEventListener('countChange', handleCountChange as EventListener);
    };
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1 className="heading">React 19 + Web Components</h1>
        </div>
        
        <div className="card-alt">
          <h2 className="subheading">Web Component Counter</h2>
          <div className="space-y">
            <custom-counter ref={counterRef} />
            <p className="text">
              Current count from Web Component: {webComponentCount}
            </p>
          </div>
        </div>

        <div className="space-y">
          <p className="text">
            This demo showcases React 19's improved web components integration with:
          </p>
          <ul className="list">
            <li>Custom element with shadow DOM</li>
            <li>Two-way communication between React and Web Components</li>
            <li>Scoped styling within the Web Component</li>
          </ul>
        </div>
      </div>
    </div>
  );
}