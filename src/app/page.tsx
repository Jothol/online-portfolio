'use client';

import { usePageNavigation } from '@/hooks/usePageNavigation';
import MusicPage from '@/components/MusicPage';
import AIPromptPage from '@/components/AiPromptPage';
import DnDPage from '@/components/DndPage';
import ExpensePage from '@/components/ExpensePage';
import FadeWrapper from '@/components/FadeWrapper';

export default function Home() {
  const { activePage, navigateTo, goHome } = usePageNavigation();

  return (
    <main className="flex flex-col min-h-screen text-white p-8 relative overflow-hidden">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">Jon Olsen</h1>
        <p className="text-lg drop-shadow-md">Software Engineer | Frontend, OOP, Algorithms</p>
      </header>

      <FadeWrapper keyId={activePage}>
        {activePage === 'home' && (
          <>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Projects</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div
                  className="bg-black/40 backdrop-blur-md border border-white/10 animate-glow-pulse sm:animate-none transition rounded-lg p-6 cursor-pointer"
                  style={{ animationDelay: '0ms' }}
                  onClick={() => navigateTo('music')}
                >
                  <h3 className="text-xl font-bold mb-2">Music Recommendation App</h3>
                  <p>Algorithm-based app that adjusts music recs based on user behavior.</p>
                </div>

                <div
                  className="bg-black/40 backdrop-blur-md border border-white/10 animate-glow-pulse sm:animate-none transition rounded-lg p-6 cursor-pointer"
                  style={{ animationDelay: '400ms' }}
                  onClick={() => navigateTo('ai')}
                >
                  <h3 className="text-xl font-bold mb-2">AI Prompt Chaining Tool</h3>
                  <p>Early-stage AI project that builds and chains intelligent prompts.</p>
                </div>

                <div
                  className="bg-black/40 backdrop-blur-md border border-white/10 animate-glow-pulse sm:animate-none transition rounded-lg p-6 cursor-pointer"
                  style={{ animationDelay: '800ms' }}
                  onClick={() => navigateTo('dnd')}
                >
                  <h3 className="text-xl font-bold mb-2">D&D Campaign Website</h3>
                  <p>HTML/CSS site for D&D lore, rules, and user stat tracking.</p>
                </div>

                <div
                  className="bg-black/40 backdrop-blur-md border border-white/10 animate-glow-pulse sm:animate-none transition rounded-lg p-6 cursor-pointer"
                  style={{ animationDelay: '1200ms' }}
                  onClick={() => navigateTo('expense')}
                >
                  <h3 className="text-xl font-bold mb-2">Expense Tracker App</h3>
                  <p>A mobile-optimized web application designed for seamless expense tracking between two users.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Resume</h2>
              <div className="bg-black/40 backdrop-blur-md border border-white/10 shadow-md rounded-lg p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Education */}
                  <div>
                    <h3 className="text-xl font-bold mb-2">Education</h3>
                    <ul className="list-disc list-inside text-sm text-gray-300 pl-4">
                      <li><span className="font-medium">University of Wisconsin - Milwaukee</span></li>
                      <li>Fall 2020 – Spring 2025</li>
                      <li>B.S. in Computer Science</li>
                    </ul>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="text-xl font-bold mb-2">Contact</h3>
                    <ul className="list-disc list-inside text-sm text-gray-300 pl-4">
                      <li> Brookfield, WI</li>
                      <li> 262-951-8347</li>
                      <li> <a href="mailto:jontholsen@gmail.com" className="underline">jontholsen@gmail.com</a></li>
                    </ul>
                  </div>
                </div>

                {/* Career Objective - full width */}
                <div>
                  <h3 className="text-xl font-bold mb-2">Career Objective</h3>
                  <p className="text-sm text-gray-300">
                    Seeking software engineering employment to apply my programming skills toward building real-world applications.
                    I am eager to contribute to innovative projects utilizing my proficiency in full-stack development and multiple programming languages.
                    With experience in machine learning, I am also eager to work hands-on with Artificial Intelligence and gain valuable experience in the field.
                  </p>
                </div>

                {/* Skills + Experience */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Technical Skills */}
                  <div>
                    <h3 className="text-xl font-bold mb-2">Technical Skills</h3>
                    <div className="mb-4">
                      <p className="font-semibold text-base">Languages & Tools</p>
                      <ul className="list-disc list-inside text-sm text-gray-300 pl-4 mt-1 space-y-1">
                        <li>Java, Python, HTML, JavaScript, C</li>
                        <li>Node.js, React, Scikit-learn</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold text-base">Mathematics</p>
                      <ul className="list-disc list-inside text-sm text-gray-300 pl-4 mt-1 space-y-1">
                        <li>Linear Algebra</li>
                        <li>Multivariable Calculus</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-base">Professional Strengths</p>
                      <ul className="list-disc list-inside text-sm text-gray-300 pl-4 mt-1 space-y-1">
                        <li>Team leadership</li>
                        <li>Resourcefulness</li>
                        <li>Organization</li>
                        <li>Detail orientation</li>
                      </ul>
                    </div>
                  </div>

                  {/* Work Experience */}
                  <div>
                    <h3 className="text-xl font-bold mb-2">Work Experience</h3>
                    <div className="mb-4">
                      <p className="font-semibold text-base">Server (Multiple Locations)</p>
                      <ul className="list-disc list-inside text-sm text-gray-300 pl-4 mt-1 space-y-1">
                        <li>Lago Su Bella (2021 – 2023), Harbor House (2024 – present)</li>
                        <li>Delivered outstanding service in a fine dining setting</li>
                        <li>Maintained exceptional attention to detail under pressure</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-base">Accounts Payable Clerk</p>
                      <ul className="list-disc list-inside text-sm text-gray-300 pl-4 mt-1 space-y-1">
                        <li>Artos Engineering Company (2018)</li>
                        <li>Managed and recorded company expense invoices</li>
                        <li>Ensured accuracy and timely processing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {activePage === 'music' && <MusicPage onBack={goHome} />}
        {activePage === 'ai' && <AIPromptPage onBack={goHome} />}
        {activePage === 'dnd' && <DnDPage onBack={goHome} />}
        {activePage === 'expense' && <ExpensePage onBack={goHome} />}
      </FadeWrapper>

      <footer className="mt-auto text-center text-sm text-gray-400 pt-4 border-t border-white/10">
        <p className="pb-2">
          © {new Date().getFullYear()} Jon Olsen — Built with Next.js & Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
