const stackHighlights = [
  "Next.js App Router",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL + Drizzle",
  "Docker Compose",
  "Production-ready build",
];

const exampleProfiles = [
  { name: "Ada Lovelace", role: "Product lead", status: "Available" },
  { name: "Grace Hopper", role: "Platform engineer", status: "Reviewing" },
  { name: "Linus Torvalds", role: "Systems architect", status: "Offline" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-400">
              Supastak · Next Stack
            </p>
          </div>
          <a
            href="/api/health/db"
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-zinc-500 hover:text-white"
          >
            Health check
          </a>
        </header>

        <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                Full-stack starter
              </span>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Build a product-ready app without starting from scratch.
              </h1>
            </div>

            <p className="max-w-xl text-lg leading-8 text-zinc-300">
              This starter gives you a modern Next.js foundation with TypeScript,
              PostgreSQL, Drizzle, Tailwind, and Docker so your team can move from
              idea to launch faster.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-400"
              >
                Read Next.js docs
              </a>
              <a
                href="/api/health/db"
                className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
              >
                Verify database
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl shadow-cyan-950/30">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
                Stack ready
              </h2>
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
                Healthy
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {stackHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-xl font-semibold text-white">What this starter includes</h2>
            <ul className="mt-6 space-y-4 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                App Router architecture with a clean file layout
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                PostgreSQL connection and database health route out of the box
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Tailwind styling and a modern dark UI for product mocks
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Local Docker workflow for an easy database-first development loop
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Example team</h2>
              <span className="text-sm text-zinc-400">Seed-ready profile cards</span>
            </div>

            <div className="space-y-3">
              {exampleProfiles.map((person) => (
                <div
                  key={person.name}
                  className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3"
                >
                  <div>
                    <p className="font-medium text-white">{person.name}</p>
                    <p className="text-sm text-zinc-400">{person.role}</p>
                  </div>
                  <span className="rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-200">
                    {person.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
