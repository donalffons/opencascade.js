import { useEffect, useMemo, useState } from "react";
import "./App.css";
import "@google/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> ;
    }
  }
}

interface ModelViewerJSX {
  src: string
  poster?: string
  class?: string
  // ... others
}

function App() {
  const [modelUrl, setModelUrl] = useState<string>();
  const worker = useMemo(() => new Worker(new URL('./openCascadeWorker.ts', import.meta.url)), []);

  useEffect(() => {
    worker.onmessage = ({ data }) => {
      setModelUrl(data);
      return () => worker.terminate();
    }
  }, [worker]);

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src="https://github.com/donalffons/opencascade.js/raw/master/images/logo.svg" alt="Ocjs Logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://ocjs.org/docs/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn OpenCascade.js
        </a>
        {modelUrl === undefined ? (
          <p>
            Loading...
          </p>
        ) : (
          <model-viewer class="App-viewport" src={modelUrl} camera-controls />
        )}
      </header>
    </div>
  );
}

export default App;
