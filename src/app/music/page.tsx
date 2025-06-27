'use client';

import Link from 'next/link';

export default function MusicPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Music Recommendation App</h1>
      <p className="mb-6">
        This app dynamically adjusts music recommendations based on user behavior.
        Built with Next.js, Firebase, and Tailwind CSS.
      </p>
      <Link href="/" className="underline text-blue-400 hover:text-blue-300">
        ← Back to Home
      </Link>
    </main>
  );
}
