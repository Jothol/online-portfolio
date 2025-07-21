'use client';

import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export default function DnDPage({ onBack }: Props) {
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
        <h1 className="text-2xl font-semibold mb-4">D&D Campaign Website</h1>

        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            <strong>Overview:</strong> A web-based companion tool for a custom Dungeons & Dragons campaign. Built to streamline character registration and stat tracking, the app brings polish, automation, and visual feedback to an evolving game system. Developed using HTML, CSS, JavaScript, and Bootstrap, the tool blends creative presentation with practical mechanics support.
          </p>

          <p><strong>Key Features:</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>Character Registration Form with HTML validation for user and character details.</li>
            <li>Persistent Stat Tracker with stamina and tether progress bars and real-time interaction.</li>
            <li>Resilience Mechanic that can reduce spell cost or regenerate stamina dynamically.</li>
            <li>Interactive UI: Includes conditional updates based on user input, and ensures form logic like required fields and numeric constraints.</li>
            <li>Custom Visual Design: Scroll-themed parchment background with image layering, shadows, and stylized typography for a fantasy feel.</li>
            <li>Modular JavaScript Architecture: Clean separation of logic for updating stamina, tether, and resilience.</li>
          </ul>

          <p><strong>Technical Stack:</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>Frontend: Vanilla HTML5, CSS3, Bootstrap 5</li>
            <li>JavaScript: DOM manipulation and real-time state updates</li>
            <li>UI Enhancements: Layered parchment effect with scroll elements, dynamic progress bars, and layout using HTML tables and Flexbox</li>
          </ul>

          <p><strong>Challenges Solved:</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>Built a flexible UI that responds to changing stat values while preserving game-specific logic.</li>
            <li>Designed a scroll-themed visual layout using layered transparent images, shadows, and tileable parchment textures.</li>
            <li>Overcame layout quirks in overlapping image stacking and responsive sizing without stretching assets.</li>
          </ul>

          <p>
            <strong>Purpose:</strong> This tool began as a personal side project for my homebrew D&D campaign, but evolved into a polished UI/UX demo. It highlights my ability to design intuitive user interfaces, create logic-driven frontends, and customize visuals with creative flair.
          </p>
        </div>
      </div>
    </div>
  );
}
