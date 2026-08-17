'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const NeuralNetwork = dynamic(() => import('./NeuralNetwork'), {
  ssr: false,
  loading: () => <LoadingState />
});

function LoadingState() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-transparent z-0">
      <div className="w-16 h-16 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );
}

function FallbackState() {
  return (
    <div className="absolute inset-0 bg-white overflow-hidden z-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100"></div>
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500 blur-sm"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `-${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function SceneLoader() {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(!!gl);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (hasWebGL === null) return <LoadingState />;
  if (!hasWebGL) return <FallbackState />;

  return <NeuralNetwork />;
}
