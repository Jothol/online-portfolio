'use client';

import { useEffect, useState } from 'react';
import { initParticlesEngine, Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export default function ParticlesBackground() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  return (
    <>
      {engineReady && (
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: true, zIndex: -1 },
            background: {
              color: { value: '#0f172a' },
            },
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true
                },
              },
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
        />
      )}
    </>
  );
}
