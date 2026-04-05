import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "We're Hiring | Big Green Builders",
  description:
    "Big Green Builders is hiring. Full-time, summer, and part-time roles available in Princeton, NJ. Apply by emailing fahad@biggreenbuilders.com.",
};

const roles = [
  {
    title: "Office Assistant & Designer Trainee",
    type: "Part-Time / Remote",
    desc: "Support day-to-day operations and assist with design coordination. Ideal for someone organized, detail-oriented, and interested in learning the design side of residential construction. Remote-friendly.",
  },
  {
    title: "Finish Carpenter",
    type: "Part-Time",
    desc: "Experienced finish carpenter to handle trim, cabinetry installation, doors, and detail woodwork on premium residential projects. Must have your own tools and a strong eye for quality.",
  },
  {
    title: "Laborer",
    type: "Full-Time",
    desc: "General laborer to support our crew on active job sites. Physical, hands-on work. No experience required—just reliability, a strong work ethic, and a willingness to learn the trade.",
  },
  {
    title: "Driver / Runner",
    type: "Part-Time",
    desc: "Handle material pickups, deliveries between job sites, and supply runs. Must have a valid driver's license and reliable transportation. Great fit for someone who knows the Princeton area.",
  },
  {
    title: "Summer Apprentice",
    type: "Seasonal (Students Only)",
    desc: "A hands-on summer apprenticeship for students interested in construction, architecture, or design. Work directly with our team on active projects and learn the full build process from the ground up.",
  },
];

export default function HiringPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 bg-secondary-container text-on-secondary-container font-sans text-xs font-bold tracking-[0.2em] rounded-lg uppercase">
            Join the Team
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-black text-on-primary leading-tight max-w-3xl">
            We&apos;re hiring.{" "}
            <span className="text-on-primary-container">
              Come build with us.
            </span>
          </h1>
          <p className="mt-6 text-on-primary/70 font-sans text-lg max-w-xl">
            Full-time, summer, and part-time roles available. Based in
            Princeton, NJ. We hire local, legal, and people who take pride in
            their craft.
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="py-24 bg-surface px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 border-l-4 border-primary pl-8">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              Open Positions
            </h2>
            <p className="text-on-surface-variant font-sans text-lg max-w-xl">
              We currently have five roles to fill. If you&apos;re hardworking,
              honest, and want to be part of a team that does things right,
              we&apos;d love to hear from you.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {roles.map((role, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-start gap-6 p-8 bg-surface-container-low rounded-lg border-l-4 border-primary hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-serif font-bold text-primary">
                      {role.title}
                    </h3>
                    <span className="px-3 py-1 bg-secondary-container text-on-secondary-container font-sans text-xs font-bold tracking-wider rounded-sm uppercase">
                      {role.type}
                    </span>
                  </div>
                  <p className="text-on-surface font-sans text-sm leading-relaxed">
                    {role.desc}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href={`mailto:fahad@biggreenbuilders.com?subject=Application: ${role.title}`}
                    className="inline-block bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-primary-container transition-all duration-200 whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-24 bg-primary text-on-primary px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            How to apply
          </h2>
          <p className="text-lg opacity-80 max-w-xl mx-auto font-sans mb-10">
            Send an email to Fahad with the role you&apos;re interested in, a
            little about yourself, and any relevant experience. No formal
            resume required — just be real.
          </p>
          <a
            href="mailto:fahad@biggreenbuilders.com?subject=Job Application – Big Green Builders"
            className="bg-surface-container-lowest text-primary px-10 py-4 rounded-lg font-bold text-base hover:bg-white transition-all inline-block"
          >
            fahad@biggreenbuilders.com
          </a>
          <p className="mt-8 text-on-primary/50 font-sans text-sm">
            Princeton, NJ · Local candidates preferred
          </p>
        </div>
      </section>
    </>
  );
}
