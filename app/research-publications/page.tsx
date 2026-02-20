import Image from 'next/image';
import Navbar from '@/components/Navbar';

const RESEARCH_IMAGES = [
  'image-a88624aa-f11e-4ba1-a4e8-a6c87b3b1cfb.png', // title page
  'image-c35389a3-43da-4cb5-877b-180a04099a1d.png', // abstract/intro
  'image-0b06f4a7-71eb-454a-9561-9b8c6c41cb6a.png', // objective/setup/hypotheses
  'image-3aedf9ec-58c6-42ef-aa94-f6441742acb8.png', // variables/procedure
  'image-d9707316-4586-4400-93d4-191d3f266dea.png', // material/cooling testing
  'image-b12c7428-26c7-4e27-b110-241f1a734c11.png', // injector/material results
  'image-0059c67e-d51c-42a8-a201-fda69ea5d57f.png', // cooling results/conclusion
];

export default function ResearchPublicationsPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none fixed inset-0 bg-grid opacity-60" />
        <div className="pointer-events-none fixed inset-0 noise-overlay" />

        <section className="relative px-6 pt-32 pb-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
              RESEARCH PUBLICATIONS
            </h1>
            <p className="mb-16 text-lg text-text-secondary">
              Research paper published on the International Journal of Science
              and Research Archive
            </p>

            <div className="space-y-8">
              {RESEARCH_IMAGES.map((img, i) => (
                <div
                  key={img}
                  className="overflow-hidden rounded-xl border border-void-border bg-void-surface/60 backdrop-blur-sm"
                >
                  <div className="border-b border-void-border px-6 py-3">
                    <span className="font-mono text-xs text-text-muted">
                      Page {i + 1}
                    </span>
                  </div>
                  <div className="p-6">
                    <Image
                      src={`/assets/${img}`}
                      alt={`Research paper page ${i + 1}`}
                      width={800}
                      height={1000}
                      className="w-full rounded-lg object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
