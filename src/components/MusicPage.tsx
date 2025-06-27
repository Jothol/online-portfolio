'use client';

interface Props {
  onBack: () => void;
}

export default function MusicPage({ onBack }: Props) {
  return (
    <div className="absolute inset-0 z-10 p-8 overflow-y-auto">
      <button onClick={onBack} className="text-white mb-4 underline">
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-4">Music Recommendation App</h1>
      <p className="text-lg mb-4">
        Algorithm-based app that adjusts music recs based on user behavior.
      </p>
      <p>
        This project explores adaptive recommendation algorithms. Songs are dynamically
        queued based on user interaction and feedback. Built with Next.js, Firebase, and Tailwind CSS.
      </p>
    </div>
  );
}
