import React from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';

declare global {
  interface Window {
    __AGENTATION_CONFIG__?: {
      enabled?: boolean;
      endpoint?: string;
      sessionId?: string;
    };
  }
}

export function initAgentation(): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Check if dev mode is active or enabled via window config or URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const explicitEnable = urlParams.get('agentation') === 'true' || urlParams.get('agentation') === '1';
  const explicitDisable = urlParams.get('agentation') === 'false' || urlParams.get('agentation') === '0';

  const config = window.__AGENTATION_CONFIG__ || {};
  const isDev = process.env.NODE_ENV !== 'production';
  const isEnabled = !explicitDisable && (explicitEnable || config.enabled === true || isDev);

  if (!isEnabled) {
    return;
  }

  // Ensure single container mount
  let container = document.getElementById('agentation-root');
  if (!container) {
    container = document.createElement('div');
    container.id = 'agentation-root';
    document.body.appendChild(container);
  }

  const endpoint = config.endpoint || 'http://host.docker.internal:4747';

  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <Agentation
          endpoint={endpoint}
          sessionId={config.sessionId}
        />
      </React.StrictMode>
    );
  } catch (err) {
    console.warn('[Agentation] Failed to mount overlay:', err);
  }
}

// Auto initialize when DOM is loaded
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAgentation);
  } else {
    initAgentation();
  }
}
