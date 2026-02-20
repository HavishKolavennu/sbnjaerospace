import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none fixed inset-0 bg-grid opacity-60" />
        <div className="pointer-events-none fixed inset-0 noise-overlay" />

        <section className="relative px-6 pt-32 pb-24">
          <div className="mx-auto max-w-5xl">
            <h1 className="mb-16 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
              OUR FOUNDERS AND
              <br />
              <span className="text-accent">AEROSPACE CLUB BOARD</span>
            </h1>

            <div className="relative overflow-hidden rounded-2xl border border-void-border bg-void-surface/60 backdrop-blur-sm">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/10 to-transparent opacity-50" />
              <div className="relative p-6 sm:p-10">
                <Image
                  src="/assets/image-9818dc49-6ce2-4061-8896-02c55fa4cbac.png"
                  alt="South Brunswick Aerospace Club team"
                  width={1200}
                  height={800}
                  className="w-full rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
