'use client';

interface Props {
  onBack: () => void;
}

export default function DnDPage({ onBack }: Props) {
  return (
    <div className="absolute inset-0 z-10 p-8 overflow-y-auto">
      <button onClick={onBack} className="text-white mb-4 underline">
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-4">D&D Campaign Website</h1>
      <p className="text-lg mb-4">
        HTML/CSS site for D&D lore, rules, and user stat tracking.
      </p>
      <p>
        This project was built as a personal tool to organize and present a custom Dungeons & Dragons campaign.
        Features include a custom ruleset overview, interactive character stats, and lore integration. Built with vanilla HTML and CSS.
      </p>
    </div>
  );
}
