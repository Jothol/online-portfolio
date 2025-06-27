'use client';

interface Props {
  onBack: () => void;
}

export default function AIPromptPage({ onBack }: Props) {
  return (
    <div className="absolute inset-0 z-10 p-8 overflow-y-auto">
      <button onClick={onBack} className="text-white mb-4 underline">
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-4">AI Prompt Chaining Tool</h1>
      <p className="text-lg mb-4">
        Early-stage AI project that builds and chains intelligent prompts.
      </p>
      <p>
        This tool explores how language models can be guided through structured chains of reasoning or tasks.
        It&apos;s designed for experimentation with AI-driven workflows and multi-step logic. Built with TypeScript and React.
      </p>
    </div>
  );
}
