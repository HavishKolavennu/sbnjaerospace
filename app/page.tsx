import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const APPLY_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScl_xSS3up7-mAU09rsRFWRtXgPgVElQFI85SEheTg2517hjg/viewform';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden">
        {/* Background grid */}
        <div className="pointer-events-none fixed inset-0 bg-grid opacity-60" />
        <div className="pointer-events-none fixed inset-0 noise-overlay" />

        {/* Hero */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 animate-fade-up text-4xl font-semibold tracking-tight text-text-primary opacity-0 sm:text-5xl md:text-6xl lg:text-7xl">
              SOUTH BRUNSWICK
              <br />
              <span className="text-accent text-glow">AEROSPACE CLUB</span>
            </h1>
            <p className="mx-auto mb-12 max-w-2xl animate-fade-up text-lg leading-relaxed text-text-secondary opacity-0 stagger-1 sm:text-xl">
              South Brunswick Aerospace Club unites passionate innovators to push
              the boundaries of aerospace engineering. Join us in building model
              rockets, liquid-fuel engines, and other cutting-edge technologies to
              launch the future of aerospace.
            </p>
            <Link
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded border border-accent/50 bg-accent/10 px-8 py-4 font-mono text-sm font-medium text-accent transition-all hover:border-accent hover:bg-accent/20 hover:glow-accent animate-fade-up opacity-0 stagger-2"
            >
              APPLY NOW
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Hero visual - space shuttle logo */}
          <div className="relative mt-16 animate-fade-up opacity-0 stagger-3">
            <div className="absolute -inset-8 rounded-full bg-accent/5 blur-3xl" />
            <div className="relative rounded-2xl border border-void-border/60 bg-void-surface/80 p-8 backdrop-blur-sm">
              <Image
                src="/assets/image-5119266e-90cc-4313-9ad8-90ba5e2ab9e4.png"
                alt="South Brunswick Aerospace"
                width={280}
                height={280}
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
