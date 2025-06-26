import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-white p-8 relative">
    <ParticlesBackground />
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">Jon Olsen</h1>
        <p className="text-lg drop-shadow-md">Software Engineer | Frontend, OOP, Algorithms</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 shadow-md rounded-lg p-6 transition hover:shadow-lg hover:scale-[1.02]">

            <h3 className="text-xl font-bold mb-2">Music Recommendation App</h3>
            <p>Algorithm-based app that adjusts music recs based on user behavior.</p>
          </div>
          <div className="bg-black/40 backdrop-blur-md border border-white/10 shadow-md rounded-lg p-6 transition hover:shadow-lg hover:scale-[1.02]">

            <h3 className="text-xl font-bold mb-2">AI Prompt Chaining Tool</h3>
            <p>Early-stage AI project that builds and chains intelligent prompts.</p>
          </div>
          <div className="bg-black/40 backdrop-blur-md border border-white/10 shadow-md rounded-lg p-6 transition hover:shadow-lg hover:scale-[1.02]">

            <h3 className="text-xl font-bold mb-2">D&D Campaign Website</h3>
            <p>HTML/CSS site for D&D lore, rules, and user stat tracking.</p>
          </div>
        </div>
      </section>

      <footer className="mt-auto text-center text-sm text-gray-400 pt-4 border-t border-white/10">
        <p className="pb-2">
          © {new Date().getFullYear()} Jon Olsen — Built with Next.js & Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
