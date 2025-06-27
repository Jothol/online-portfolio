'use client';

import Link from 'next/link';

export default function AIPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">AI Prompt Chaining Tool</h1>
      <p className="mb-6">
        This early-stage tool builds and chains intelligent AI prompts to guide generative workflows.
      </p>
      <Link href="/" className="underline text-blue-400 hover:text-blue-300">
        ← Back to Home
      </Link>
    </main>
  );
}
