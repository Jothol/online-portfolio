'use client';

import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export default function MusicPage({ onBack }: Props) {
  return (
    <div>
      <button
        onClick={onBack}
        className="absolute top-6 left-6 flex items-center text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full shadow transition"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>
      <div className="mb-12">
        <h1 className="text-2xl font-semibold mb-4">Music Recommendation App</h1>
        <p className="text-lg mb-4">
          Algorithm-based app that adjusts music recs based on user behavior.
        </p>
        <p>
          This project explores adaptive recommendation algorithms. Songs are dynamically
          queued based on user interaction and feedback. Built with Next.js, Firebase, and Tailwind CSS.
        </p>
      </div>
    </div>
  );
}
