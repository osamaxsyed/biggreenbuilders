import Image from "next/image";
import Link from "next/link";

// Images sourced from biggreenbuilders.com
const HERO_IMG =
  "https://lh3.googleusercontent.com/sitesv/APaQ0SSFN-7MLH4W1-Hesf4aSMOp2NOXjMw_iAW_e5DdS9s-yHsroLoy7IYYYFtasHzngMcEBixzxUkWc35ptvqzXKn5wK-3HUS3NS4A7953hxBxkHbcAGdJ91mpIuG7MggS6fE4vG3ygoQH8CTAaXyDEZJgJJR1zOeWaPSNEBOHFd56QjoN6-F-TXIFKSasZlkgExPPFpVFSob4h5Zh9GgKw1AnIyBl0jo4yOEW=w1280";

const PROJECT_IMGS = [
  "https://lh3.googleusercontent.com/sitesv/APaQ0SR-VETEg7UcANdL3cJLGO0LELcmoFvqpka21nNSzVXr-jkCARc92b8WPpPMYpZrmjeNtEnFA7WFOdLRwgSvvqijzIewxYZYOGxFbbPWuetj7WgVMRf8Sz79fSgBa1tBTHkuely8qiSeOkGeETjXo0UTJ0G63LpXRCqGAaie00DJQM4ycM2felgOMWEnFv-iXB-N39qxF39bUuLc46JsJeV4oEprLvPuUJXFxOc=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SSSyKR90tgdYDMFTKIzfmNEFn7uWR2MTfO2J-LTNfmyQbY_S6dfCQOM--QbRgD-vFFLrJRNE2QeI5kDmnorL9a0JPFTQcasQJ9_0xoMjDb3cQqcE-Z4VJpGcR9r4a2uT9M9sGZWTFBsYyBClFgwLT7FZzXIOCnMF8k_GwVPjElZEue7Jb33OoNAE_pN3L4-7xjXe_N6y6QjTvhd3QceHm6jj4Jr1f4DJjkNW64=w1280",
  "https://lh3.googleusercontent.com/sitesv/APaQ0SQODukXkuSHG-OE7ocbCIqCrr8GUSgn4mlUlK3cmvnk1NZ-kqIn3s9xK6SQzUQHSIbgT6T-GVg2O0S3TVUWrbmoxN1hWEJAOY1H3DRiYDDw67GLfj_BLm_kRg263AbF7mx8gqAcFvK7utatdSbt4_H8YW0KEA36aij7f3MpzAFeiNcK0MQGMPZz6PgL8dD3_r3SlhumOyAl9uRMmlXtYLdA1IsLWEm4PymxJOI=w1280",
];

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5V2.05z" />
      </svg>
    ),
    title: "Owner-Run Company",
    body:
      "We're a small business managed by the owners and staffed by locals. When you hire us, you get Fahad—the owner is on-site, in the trench.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
    title: "100% Legal & Local",
    body:
      "We hire only local, legal W2 employees and work exclusively with licensed local subcontractors. Our commitment means consistent quality and liability protection for you.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
      </svg>
    ),
    title: "Radical Transparency",
    body:
      "Upfront pricing with no hidden fees. We provide full budget visibility before the first hammer swings—so you know exactly what you're getting.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ),
    title: "10 Projects Per Year",
    body:
      "We intentionally limit our project load. You won't be number 47—you'll be one of ten. That's the boutique difference.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMG}
            alt="Big Green Builders construction project"
            fill
            className="object-cover opacity-50"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/75 to-primary/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full py-24">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 mb-6 bg-secondary-container text-on-secondary-container font-sans text-xs font-bold tracking-[0.2em] rounded-lg uppercase">
              Established 2008
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-black leading-[1.1] mb-6 text-on-primary">
              We build 10 projects a year.{" "}
              <span className="text-on-primary-container">
                Yours could be one of them.
              </span>
            </h1>
            <p className="text-lg md:text-xl font-sans text-on-primary/80 mb-10 leading-relaxed max-w-xl">
              Custom additions, new construction, and finished basements.
              Full-cycle project management with radical transparency and
              boutique craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="bg-surface-container-lowest text-primary px-8 py-4 rounded-lg font-bold text-base hover:bg-surface-container transition-all flex items-center gap-2"
              >
                See Our Projects
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="border border-on-primary/30 text-on-primary px-8 py-4 rounded-lg font-bold text-base hover:bg-on-primary/10 transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-surface px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 border-l-4 border-primary pl-8">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              The Boutique Standard
            </h2>
            <p className="text-on-surface-variant font-sans max-w-xl text-lg">
              We don&apos;t juggle fifty projects. We focus on yours with the
              precision of an artisan and the integrity of a neighbor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col p-8 bg-surface-container-low rounded-lg transition-all hover:-translate-y-1 duration-200"
              >
                <div className="mb-5 flex items-center justify-center w-14 h-14 bg-primary rounded-lg text-on-primary">
                  {f.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-primary">
                  {f.title}
                </h3>
                <p className="text-on-surface font-sans text-sm leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="bg-surface-container-highest py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            {[
              {
                title: "Custom Additions",
                body:
                  "Expand your living space seamlessly. From sunrooms to second stories, we integrate new construction with your existing home's character.",
                img: PROJECT_IMGS[0],
              },
              {
                title: "New Construction",
                body:
                  "Build from the ground up with a team that treats your home as their own. Full-cycle management from pre-construction to post-build touch-ups.",
                img: PROJECT_IMGS[1],
              },
              {
                title: "Finished Basements",
                body:
                  "Transform underutilized space into the room your family has always needed. Structural, moisture, and architectural woodwork handled in-house.",
                img: PROJECT_IMGS[2],
              },
            ].map((service, i) => (
              <div key={i} className="relative group overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-serif font-bold text-on-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-on-primary/75 font-sans text-sm leading-relaxed">
                    {service.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Letter from the Builder */}
      <section className="py-24 bg-surface px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-5/12 relative">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl aspect-[4/5]">
                <Image
                  src="https://lh3.googleusercontent.com/sitesv/APaQ0SQBYQzgmb1s64xyLYJXVFad2-AgSaGxxG7aSknKjxD1_dOTsBRlcJ1EetZHpav-S1wqAKcn6kCf-2cqwk4thw-cipLRHStjk0LXI-_BygM8lXCXpky6XDlZRIxK8gIEwiecY3RqiKF5LWmQqKI7uX5sYylfUnjDcm9ZvYJ5_B9nWk5tMpTm5ih88o0B8knICiaieUoyk8xRgXT8yXMp7pT-_YFNEi9KybbTi10=w1280"
                  alt="Fahad, Founder of Big Green Builders"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-primary-container/20 z-0 rounded-lg" />
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-primary/10 z-0 rounded-lg" />
            </div>

            <div className="lg:w-7/12 flex flex-col gap-6">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-14 h-14 text-primary/20"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <blockquote className="text-3xl md:text-4xl font-serif font-black italic text-primary leading-tight">
                &ldquo;I&apos;ve always believed the search for a contractor
                should start in the nearest trench.&rdquo;
              </blockquote>
              <div className="space-y-4 text-base font-sans text-on-surface-variant leading-relaxed">
                <p>Dear Homeowner,</p>
                <p>
                  Most construction firms are sales organizations that happen to
                  build things. At Big Green Builders, we are craftsmen who
                  happen to own a business. We intentionally limit our project
                  load to ensure that every structural detail—from the framing
                  you&apos;ll never see to the finish work you&apos;ll touch
                  every day—is handled with uncompromising care.
                </p>
                <p>
                  Our philosophy is simple: quality over volume. When you hire
                  us, you are hiring a partner who values the history and future
                  of your home as much as you do.
                </p>
                <div className="pt-4 border-t border-outline-variant">
                  <p className="font-serif font-bold text-primary text-xl mb-1">
                    Fahad
                  </p>
                  <p className="font-sans text-xs uppercase tracking-widest text-outline">
                    Founder &amp; Lead Builder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary text-on-primary px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to build something permanent?
          </h2>
          <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto font-sans">
            We are currently accepting inquiries for upcoming project starts.
            Let&apos;s discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-surface-container-lowest text-primary px-10 py-4 rounded-lg font-bold text-base hover:bg-white transition-all"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/projects"
              className="border border-white/30 text-white px-10 py-4 rounded-lg font-bold text-base hover:bg-white/10 transition-all"
            >
              View Past Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
