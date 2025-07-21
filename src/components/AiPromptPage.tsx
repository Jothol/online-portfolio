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
        className="hidden md:flex absolute top-6 left-6 items-center text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full shadow transition"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>
      <div className="mb-12">
        <h1 className="text-2xl font-semibold mb-4">AI Prompt Chaining Tool</h1>

        <div className="space-y-6 text-sm text-white/90">
          <div>
            <h2 className="font-medium text-white mb-1">Overview:</h2>
            <p>
              A product ideation experiment leveraging AI prompt chaining and no-code tooling to explore how far one can go in building a full-stack web app without manually writing code. Currently in early planning, the project is centered around using ChatGPT and lovable.dev to iteratively generate requirements, architecture, UI, and database logic through guided prompting.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-white mb-1">Key Goals (Planned):</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Prompt-Driven Development:</strong> Using ChatGPT to generate a Product Requirements Document (PRD) and implementation steps.</li>
              <li><strong>No-Code/Low-Code Stack:</strong> Building the core app via lovable.dev and Supabase (for database and auth).</li>
              <li><strong>Dynamic Prompt Chaining:</strong> Breaking tasks into atomic prompts for consistent generation and debugging.</li>
              <li><strong>Version Control:</strong> Project auto-synced to GitHub for versioning and traceability of AI-generated code.</li>
              <li><strong>AI Debugging:</strong> Leveraging LLMs to explain and fix build errors and refine best practices.</li>
              <li><strong>Modular Prompting:</strong> Use of prompt templates for components, database logic, and API handling.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium text-white mb-1">Technical Stack (Expected):</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Frontend:</strong> AI-generated React via lovable.dev</li>
              <li><strong>Backend:</strong> Supabase (Postgres, Row-Level Security, Auth)</li>
              <li><strong>Dev Process:</strong> ChatGPT prompt chaining + lovable.dev project knowledge base</li>
              <li><strong>Versioning:</strong> GitHub for code backup and collaboration</li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium text-white mb-1">Challenges & Learning Objectives:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Evaluate the limits and reliability of AI-generated code across project stages.</li>
              <li>Develop reusable prompt workflows for component design, debugging, and feature expansion.</li>
              <li>Understand when and how to intervene in AI output for correctness and maintainability.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium text-white mb-1">Purpose:</h2>
            <p>
              This project serves as a deep dive into AI-assisted development workflows. It’s not about speed, but about learning <em>how to think in prompts</em>, 
              work iteratively with an LLM, and produce tangible outputs using modern no-code tools. Still early stage, with initial planning and architecture currently underway.
            </p>
          </div>

          <p className="italic text-white/60">
            This project is in active exploration. I&apos;d be happy to share my process or walk through my prompting methodology during an interview.
          </p>
        </div>
      </div>
    </div>
  );
}
