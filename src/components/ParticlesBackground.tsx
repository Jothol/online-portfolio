'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { initParticlesEngine, Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready || typeof window === 'undefined') return null;

  const portalRoot = document.getElementById('particles-root');
  if (!portalRoot) return null;

  return createPortal(
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: { value: '#0f172a' },
        },
        particles: {
          number: { value: 200, density: { enable: true } },
          color: { value: '#ffffff' },
          links: {
            enable: true,
            distance: 150,
            color: '#94a3b8',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            outModes: { default: 'bounce' },
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />,
    portalRoot
  );
}
