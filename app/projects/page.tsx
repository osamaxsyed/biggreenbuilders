import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Big Green Builders",
  description:
    "Browse Big Green Builders' portfolio of custom additions, new construction, and finished basement projects.",
};

const projects = [
  {
    title: "Custom Addition — Main Floor Expansion",
    category: "Custom Addition",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    desc: "A seamless expansion integrating open-concept living with the existing home's architecture.",
  },
  {
    title: "New Construction — Modern Craftsman",
    category: "New Construction",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    desc: "A ground-up build with custom millwork, natural stone surfaces, and energy-efficient framing.",
  },
  {
    title: "Finished Basement — Family Suite",
    category: "Finished Basement",
    img: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80",
    desc: "Full basement transformation including structural grading, moisture sealing, and architectural woodwork.",
  },
  {
    title: "Kitchen & Interior Renovation",
    category: "Renovation",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    desc: "Complete kitchen overhaul with custom cabinetry, stone countertops, and professional-grade appliance integration.",
  },
  {
    title: "Second-Story Addition",
    category: "Custom Addition",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    desc: "A full second-story addition adding three bedrooms and two baths while matching the original home's roofline.",
  },
  {
    title: "Outdoor Living Addition",
    category: "Custom Addition",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    desc: "Custom deck and covered outdoor living space designed to extend the home's usable footprint year-round.",
  },
  {
    title: "Full Home Remodel",
    category: "Renovation",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    desc: "A complete top-to-bottom remodel preserving original character while modernizing all systems and finishes.",
  },
  {
    title: "Master Suite Addition",
    category: "Custom Addition",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    desc: "A luxurious master suite addition with walk-in closet, spa bath, and private sitting area.",
  },
  {
    title: "Basement Bar & Entertainment",
    category: "Finished Basement",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    desc: "Custom bar, home theater, and entertainment suite finished to the highest spec in a previously unfinished basement.",
  },
];

const categories = ["All", "Custom Addition", "New Construction", "Finished Basement", "Renovation"];

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 bg-secondary-container text-on-secondary-container font-sans text-xs font-bold tracking-[0.2em] rounded-lg uppercase">
            Our Work
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-black text-on-primary leading-tight max-w-3xl">
            Every project, a story of{" "}
            <span className="text-on-primary-container">intentional craft.</span>
          </h1>
          <p className="mt-6 text-on-primary/70 font-sans text-lg max-w-xl">
            Ten projects a year means every home in our portfolio received our
            full attention. Browse the work we&apos;re proud to put our name on.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-24 bg-surface px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-sans font-bold cursor-pointer transition-all ${
                  cat === "All"
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-surface-container-low rounded-lg overflow-hidden hover:-translate-y-1 transition-all duration-200"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"

                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2.5 py-1 mb-3 bg-secondary-container text-on-secondary-container font-sans text-xs font-bold tracking-wider rounded-sm uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-container-highest px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">
            Envision your project in this portfolio?
          </h2>
          <p className="text-on-surface-variant font-sans text-lg mb-10 max-w-xl mx-auto">
            We accept a limited number of projects each year. Reach out now to
            check availability for your start date.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-base hover:bg-primary-container transition-all inline-block"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
