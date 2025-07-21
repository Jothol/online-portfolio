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
        className="hidden md:flex absolute top-6 left-6 items-center text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full shadow transition"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>
      <div className="mb-12">
        <h1 className="text-2xl font-semibold mb-4">Music Recommendation App</h1>

        <section className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong>Overview:</strong><br />
            A mobile-first music discovery app that streams songs from Firebase Storage and adapts the queue in real time based on user feedback. Built with Next.js, TypeScript, Tailwind CSS, and Firebase, the app is designed for lightweight listening, real-time engagement tracking, and the foundation of a personalized recommendation engine.
          </p>

          <div>
            <strong>Key Features:</strong>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
              <li><strong>Music Queue System</strong> displays a rotating list of 3 upcoming songs, preloaded in batches to reduce bandwidth and improve playback continuity.</li>
              <li><strong>Custom Playback Controls</strong> include play/pause, skip, and refresh, all integrated with React state and the HTML5 <code>&lt;audio&gt;</code> API.</li>
              <li><strong>Song Feedback Support</strong> (in progress) allows users to like or dislike tracks, laying the groundwork for future algorithmic recommendations.</li>
              <li><strong>Engagement Metrics</strong> are tracked per user (e.g., listen time, skip count) and stored in Firestore for score-based filtering.</li>
              <li><strong>Firebase Streaming</strong> ensures secure audio playback via generated URLs, with all song metadata stored in Firestore.</li>
              <li><strong>Responsive Design:</strong> Mobile-optimized interface with fixed player controls and a clean, distraction-free listening UI.</li>
            </ul>
          </div>

          <div>
            <strong>Technical Stack:</strong>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
              <li><strong>Frontend:</strong> React, Next.js App Router, Tailwind CSS</li>
              <li><strong>Backend:</strong> Firebase Firestore & Storage, REST API Routes</li>
              <li><strong>Audio & Interaction:</strong> <code>&lt;audio&gt;</code> element, React hooks, debounced state updates</li>
            </ul>
          </div>

          <p>
            <strong>Challenges Solved:</strong><br />
            Built a reusable queue system with stateful song management, designed batch-fetching logic to avoid excessive Firestore reads, and structured real-time playback transitions to respect pause/play state during queue updates. Laid the groundwork for personalized recommendations by designing a flexible schema for user feedback and behavior tracking.
          </p>

          <p>
            <strong>Purpose:</strong><br />
            This app demonstrates full-stack development, audio streaming, and early-stage recommendation logic. It’s an ongoing project focused on crafting an engaging and scalable music discovery experience with minimal licensing dependencies. I’m happy to demo the current version and discuss future goals during an interview.
          </p>
        </section>
      </div>
    </div>
  );
}
