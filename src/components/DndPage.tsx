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
        className="hidden md:flex absolute top-6 left-6 items-center text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full shadow transition"      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>
      <div className="mb-12">
        <h1 className="text-2xl font-semibold mb-4">D&D Campaign Website</h1>
        <p className="text-lg mb-4">
          HTML/CSS site for D&D lore, rules, and user stat tracking.
        </p>
        <p>
          This project was built as a personal tool to organize and present a custom Dungeons & Dragons campaign.
          Features include a custom ruleset overview, interactive character stats, and lore integration. Built with vanilla HTML and CSS.
        </p>
      </div>
    </div>
  );
}
