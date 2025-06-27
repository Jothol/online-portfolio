'use client';

import Link from 'next/link';

export default function DNDPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">D&D Campaign Website</h1>
      <p className="mb-6">
        A custom HTML/CSS site that tracks lore, homebrew rules, and player stats for a long-running campaign.
      </p>
      <Link href="/" className="underline text-blue-400 hover:text-blue-300">
        ← Back to Home
      </Link>
    </main>
  );
}
