import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Big Green Builders",
  description:
    "Learn about Big Green Builders—an owner-run residential construction company with over a decade of experience in custom additions, new construction, and finished basements.",
};

const ABOUT_IMG =
  "https://lh3.googleusercontent.com/sitesv/APaQ0SSG5mCaVC9CakRGfoyw3uk8fUARMHcVT2G5CqqAYdfTjfKYXEzMnKe13ZRvPMFJkO8L--irNBTx4JHuNw_DspnYJHTAv6EuXGYoBeDVct8Nd6ctLg2mfFlquaC8KUJ8mYVQa7nKSV140yVsWfOx_qxw0CIlrqkYeboB8el3Bk2hfOzjdezK1fpZI0xsk3imEw9ugPEf_Q82A7tUg0p8OdF4xCOE0zh5YU8umRE=w1280";

const TEAM_IMG =
  "https://lh3.googleusercontent.com/sitesv/APaQ0SQ5HHNRJYqKqnhdLkLEjNZNmI6VSZxbIxb2J_QU_Jz3h02LyW7dFNIQe7su0PRnVgLjRBn6NhggGH8WZ0WVK_QJcZS1iX3Ys2A4U8IUlJPoI0pJJ4e2vu8fHZYqJu_0LOXtnek0Gd1Eg5BbckjuXqWj2o5hi9Hz-NUd47W2iRMNP7ayqD_X-Fl5WTq1Kx5yLocfBDKM7ngUGhBv6zYsnord5pBx_uOWrzbZMLM=w1280";

const values = [
  {
    title: "Quality Over Volume",
    body: "We cap our workload at ten projects per year. This isn't a business strategy—it's a commitment to the families who trust us with their homes.",
  },
  {
    title: "Full-Cycle Ownership",
    body: "We take ownership of your project from pre-construction planning through a post-completion touch-up visit. Your dream, managed end to end.",
  },
  {
    title: "Ethical Labor Practices",
    body: "Every person on your site is a legal W2 employee or a licensed, local subcontractor. We don't cut corners on labor—ever.",
  },
  {
    title: "Transparent Budgeting",
    body: "You'll see where every dollar goes. No change-order surprises, no vague line items. We believe radical transparency builds better relationships.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 bg-secondary-container text-on-secondary-container font-sans text-xs font-bold tracking-[0.2em] rounded-lg uppercase">
            Our Story
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-black text-on-primary leading-tight max-w-3xl">
            Built on integrity. <br />
            <span className="text-on-primary-container">Managed by owners.</span>
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 md:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={ABOUT_IMG}
                  alt="Big Green Builders work site"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg z-0" />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                Over a decade of residential craftsmanship
              </h2>
              <p className="text-on-surface-variant font-sans leading-relaxed">
                Big Green Builders was founded on a simple belief: homeowners
                deserve a contractor who treats their project with the same
                care they would give their own home. Since 2008, we&apos;ve
                been delivering that promise to families across the region.
              </p>
              <p className="text-on-surface-variant font-sans leading-relaxed">
                Our specialty is full-cycle project management. Starting with
                pre-construction, we take ownership of your dream. Throughout
                your build, we keep your project on track. And after
                you&apos;ve moved in, we follow up with a post-construction
                touch-up visit to make sure we delivered exactly what we
                promised.
              </p>
              <p className="text-on-surface-variant font-sans leading-relaxed">
                We are small and selective. We accept ten or fewer projects per
                year. All of this comes at a premium—but you can trust your
                home will be safe in our hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-surface-container-low px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 border-l-4 border-primary pl-8">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              What We Stand For
            </h2>
            <p className="text-on-surface-variant font-sans max-w-xl text-lg">
              These aren&apos;t marketing slogans. They&apos;re the principles
              that guide every decision we make on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 bg-surface rounded-lg border-t-4 border-primary"
              >
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  {v.title}
                </h3>
                <p className="text-on-surface font-sans leading-relaxed text-sm">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 md:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <span className="font-sans text-xs uppercase tracking-widest text-outline font-bold">
                Leadership
              </span>
              <h2 className="text-4xl font-serif font-bold text-primary">
                Meet the team behind the build
              </h2>
              <p className="text-on-surface-variant font-sans leading-relaxed">
                Big Green Builders is owner-operated. Fahad, the founder, is
                personally involved in every project—not from an office, but
                from the site itself. His hands-on approach is what
                differentiates us from larger firms that hand clients off to
                junior managers.
              </p>
              <p className="text-on-surface-variant font-sans leading-relaxed">
                Our crew is made up of skilled local tradespeople who share
                the same commitment to quality. When you meet the Big Green
                team, you&apos;re meeting the people who will actually build
                your home.
              </p>
              <div className="pt-4">
                <p className="font-serif font-bold text-primary text-2xl mb-1">
                  Fahad
                </p>
                <p className="font-sans text-xs uppercase tracking-widest text-outline">
                  Founder &amp; Lead Builder
                </p>
                <a
                  href="mailto:fahad@biggreenbuilders.com"
                  className="mt-3 inline-block text-sm font-sans text-primary hover:underline"
                >
                  fahad@biggreenbuilders.com
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src={TEAM_IMG}
                  alt="Big Green Builders team"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-on-primary px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to work with a team you can trust?
          </h2>
          <p className="text-lg mb-10 opacity-80 max-w-xl mx-auto font-sans">
            We&apos;d love to hear about your project. Reach out and
            let&apos;s start the conversation.
          </p>
          <Link
            href="/contact"
            className="bg-surface-container-lowest text-primary px-10 py-4 rounded-lg font-bold text-base hover:bg-white transition-all inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
