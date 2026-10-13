'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

const fontFamily = "'Inter', ui-sans-serif, system-ui, sans-serif";

let mermaidIdCounter = 0;

const MermaidRenderer = ({ chart }: { readonly chart: string }): ReactNode => {
  const [id] = useState(() => `mermaid-${mermaidIdCounter++}`);
  const [svg, setSvg] = useState<string>();
  const [isDark, setIsDark] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bindFunctionsRef = useRef<((element: Element) => void) | undefined>(undefined);

  useEffect(() => {
    const media = globalThis.matchMedia?.('(prefers-color-scheme: dark)');
    const detect = (): void => {
      const root = document.documentElement;
      setIsDark(root.classList.contains('dark') || media?.matches === true);
    };
    detect();
    const observer = new MutationObserver(detect);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    media?.addEventListener('change', detect);
    return () => {
      observer.disconnect();
      media?.removeEventListener('change', detect);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    // Reset render state when chart/theme inputs change.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- async mermaid render owns the follow-up setState
    setSvg(undefined);

    void (async () => {
      const { default: mermaid } = await import('mermaid');
      if (cancelled) return;

      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'loose',
        fontFamily,
        theme: isDark ? 'dark' : 'default',
        flowchart: { curve: 'basis', padding: 20 },
      });

      const result = await mermaid.render(id, chart.replaceAll(String.raw`\n`, '\n'));
      if (cancelled) return;
      bindFunctionsRef.current = result.bindFunctions;
      setSvg(result.svg);
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, isDark, id]);

  useEffect(() => {
    if (containerRef.current && bindFunctionsRef.current) {
      bindFunctionsRef.current(containerRef.current);
      bindFunctionsRef.current = undefined;
    }
  }, [svg]);

  if (!svg) return undefined;

  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border/50 bg-muted/30 px-4 py-6">
      <div
        // Mermaid returns pre-rendered SVG strings; dangerouslySetInnerHTML is the intended injection method.
        dangerouslySetInnerHTML={{ __html: svg }}
        ref={containerRef}
        className="[&>svg]:mx-auto [&>svg]:block [&>svg]:bg-transparent!"
      />
    </div>
  );
};

/**
 * Renders a Mermaid diagram from chart definition text. Client-only.
 */
export const Mermaid = ({ chart }: { readonly chart: string }): ReactNode => {
  return <MermaidRenderer chart={chart} />;
};
