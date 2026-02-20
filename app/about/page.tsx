import Navbar from '@/components/Navbar';

const PILLARS = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'LEARN FROM OTHERS',
    description:
      'Ask the captains and board members of your rocket team any questions regarding building rockets and learn the skills required to build the most optimal rocket from your peers.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <path d="M11 21h2a2 2 0 0 0 2-2v-2a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1 1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1Z" />
      </svg>
    ),
    title: 'CONNECT',
    description:
      'Connect with like-minded people, build relationships that can last beyond a rocket competition, and help grow your network for future opportunities.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
    title: 'GROW',
    description:
      'Gain new engineering skills, team-building skills, leadership, and aerospace knowledge through being a part of one of the model rocket SBARC teams.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none fixed inset-0 bg-grid opacity-60" />
        <div className="pointer-events-none fixed inset-0 noise-overlay" />

        <section className="relative px-6 pt-32 pb-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
              SB AEROSPACE CLUB MISSION
            </h1>
            <p className="mb-20 max-w-2xl text-lg leading-relaxed text-text-secondary">
              A dynamic environment designed to foster learning, connection,
              and inspiration. Exchange ideas and find new pathways for the tech
              landscape.
            </p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {PILLARS.map((pillar, i) => (
                <article
                  key={pillar.title}
                  className="group relative overflow-hidden rounded-xl border border-void-border bg-void-surface/60 p-8 backdrop-blur-sm transition-all hover:border-accent/30"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                    {pillar.icon}
                  </div>
                  <h2 className="mb-3 font-mono text-sm font-medium tracking-wider text-accent">
                    {pillar.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
