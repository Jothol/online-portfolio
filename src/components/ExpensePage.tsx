'use client';

import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export default function ExpensePage({ onBack }: Props) {
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
        <h1 className="text-2xl font-semibold mb-4">Expense Tracker App</h1>

        <div className="space-y-6 text-sm leading-relaxed text-gray-100">
          <p>
            <strong>Overview:</strong> A mobile-optimized web application designed for seamless expense tracking between two users. Built with <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and <strong>Firebase</strong>, the app emphasizes clarity, privacy, and real-time collaboration in shared financial responsibilities.
          </p>

          <div>
            <strong>Key Features:</strong>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong> Private Authentication</strong> using Firebase Auth ensures only the two intended users can access the app.</li>
              <li><strong> Expense Logging</strong> with categories: Shared, Personal, Private, and Gift.</li>
              <li><strong> Dynamic Log View</strong> with grouped and reversed entries, bold text, and intuitive icons.</li>
              <li><strong> Visual Summary & Balance Scale</strong> showing contributions and debts in real time.</li>
              <li><strong> Payments & Adjustments:</strong> Prevents zero-dollar entries; supports direct settlements.</li>
              <li><strong> Responsive Design:</strong> Mobile-first layout with fixed nav tabs and swipeable toggles.</li>
            </ul>
          </div>

          <div>
            <strong>Technical Stack:</strong>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Frontend:</strong> React, Next.js App Router, Tailwind CSS</li>
              <li><strong>Backend:</strong> Firebase Firestore & Auth</li>
              <li><strong>UX Enhancements:</strong> Glassmorphism, portals for overlays, swipe gestures, animated UI</li>
            </ul>
          </div>

          <p>
            <strong>Challenges Solved:</strong> Implemented fine-grained Firestore queries and rules for private logs, built dynamic overlays with React portals to resolve layout stacking issues, and developed conditional UI logic based on authenticated identity.
          </p>

          <p>
            <strong>Purpose:</strong> Originally built as a practical tool for my relationship, this app demonstrates full-stack development, real-time state management, and thoughtful UI/UX design tailored to personal use cases.
          </p>

          <p className="italic text-gray-400">
            This app is private due to sensitive data and user-specific access, but I’m happy to demo it live or provide a walkthrough during an interview.
          </p>
        </div>
      </div>
    </div>
  );
}
