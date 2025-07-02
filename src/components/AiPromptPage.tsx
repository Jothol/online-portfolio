'use client';

import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export default function AIPromptPage({ onBack }: Props) {
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
        <h1 className="text-2xl font-semibold mb-4">AI Prompt Chaining Tool</h1>
        <p className="text-lg mb-4">
          Early-stage AI project that builds and chains intelligent prompts.
        </p>
        <p>
          This tool explores how language models can be guided through structured chains of reasoning or tasks.
          It&apos;s designed for experimentation with AI-driven workflows and multi-step logic. Built with TypeScript and React.
        </p>
      </div>
    </div>
  );
}
