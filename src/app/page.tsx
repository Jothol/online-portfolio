export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <p className="text-lg">Aspiring Software Developer | Frontend, OOP, Algorithms</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Music Recommendation App</h3>
            <p>Algorithm-based app that adjusts music recs based on user behavior.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">AI Prompt Chaining Tool</h3>
            <p>Early-stage AI project that builds and chains intelligent prompts.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">D&D Campaign Website</h3>
            <p>HTML/CSS site for D&D lore, rules, and user stat tracking.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Your Name — Built with Next.js & Tailwind CSS</p>
      </footer>
    </main>
  );
}
