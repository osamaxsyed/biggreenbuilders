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
    img: "https://lh3.googleusercontent.com/sitesv/APaQ0SR-VETEg7UcANdL3cJLGO0LELcmoFvqpka21nNSzVXr-jkCARc92b8WPpPMYpZrmjeNtEnFA7WFOdLRwgSvvqijzIewxYZYOGxFbbPWuetj7WgVMRf8Sz79fSgBa1tBTHkuely8qiSeOkGeETjXo0UTJ0G63LpXRCqGAaie00DJQM4ycM2felgOMWEnFv-iXB-N39qxF39bUuLc46JsJeV4oEprLvPuUJXFxOc=w1280",
    desc: "A seamless expansion integrating open-concept living with the existing home's architecture.",
  },
  {
    title: "New Construction — Modern Craftsman",
    category: "New Construction",
    img: "https://lh3.googleusercontent.com/sitesv/APaQ0SSSyKR90tgdYDMFTKIzfmNEFn7uWR2MTfO2J-LTNfmyQbY_S6dfCQOM--QbRgD-vFFLrJRNE2QeI5kDmnorL9a0JPFTQcasQJ9_0xoMjDb3cQqcE-Z4VJpGcR9r4a2uT9M9sGZWTFBsYyBClFgwLT7FZzXIOCnMF8k_GwVPjElZEue7Jb33OoNAE_pN3L4-7xjXe_N6y6QjTvhd3QceHm6jj4Jr1f4DJjkNW64=w1280",
    desc: "A ground-up build with custom millwork, natural stone surfaces, and energy-efficient framing.",
  },
  {
    title: "Finished Basement — Family Suite",
    category: "Finished Basement",
    img: "https://lh3.googleusercontent.com/sitesv/APaQ0SQODukXkuSHG-OE7ocbCIqCrr8GUSgn4mlUlK3cmvnk1NZ-kqIn3s9xK6SQzUQHSIbgT6T-GVg2O0S3TVUWrbmoxN1hWEJAOY1H3DRiYDDw67GLfj_BLm_kRg263AbF7mx8gqAcFvK7utatdSbt4_H8YW0KEA36aij7f3MpzAFeiNcK0MQGMPZz6PgL8dD3_r3SlhumOyAl9uRMmlXtYLdA1IsLWEm4PymxJOI=w1280",
    desc: "Full basement transformation including structural grading, moisture sealing, and architectural woodwork.",
  },
  {
    title: "Kitchen & Interior Renovation",
    category: "Renovation",
    img: "https://lh3.googleusercontent.com/sitesv/APaQ0SQBYQzgmb1s64xyLYJXVFad2-AgSaGxxG7aSknKjxD1_dOTsBRlcJ1EetZHpav-S1wqAKcn6kCf-2cqwk4thw-cipLRHStjk0LXI-_BygM8lXCXpky6XDlZRIxK8gIEwiecY3RqiKF5LWmQqKI7uX5sYylfUnjDcm9ZvYJ5_B9nWk5tMpTm5ih88o0B8knICiaieUoyk8xRgXT8yXMp7pT-_YFNEi9KybbTi10=w1280",
    desc: "Complete kitchen overhaul with custom cabinetry, stone countertops, and professional-grade appliance integration.",
  },
  {
    title: "Second-Story Addition",
    category: "Custom Addition",
    img: "https://lh3.googleusercontent.com/sitesv/APaQ0STQaNdGFZAi8-63bxK0-JY0DY7F5X_HZSmNRBwPIfQ2fyN35eVgPBPs2v4bQx8hwZLtvLSqs_hiKDvJH0AlRB4Yvq0Mln7U2-nPc23z1rTEp9GV26JsgimfxNwXOZkpty-YvkTWMKfPIOaddP00xlumgWKFH-sVY-ocRMWdB6y-GTsMu_Jli05hG1PCSmff_29qOfzrXcg157qEec8cBhCGmMWzuKMbJbtzxdU=w1280",
    desc: "A full second-story addition adding three bedrooms and two baths while matching the original home's roofline.",
  },
  {
    title: "Outdoor Living Addition",
    category: "Custom Addition",
    img: "https://lh3.googleusercontent.com/sitesv/APaQ0SS4wegXRLtDZhT9guqhrLInyWobS-_YurjlMtogOcjCnpmvVda7UWuVIIOSSPqGIDH63M0Z3z1CTZdLOL5hG_5rxfUiTV7_GhyR4gizJYlOdfA0brY0iGGwLo8bimAmC1rlXmyqlIDlo92DhcPQoUTCphN_xxaSndQbH-AEwEFTwXqV-WbKCAfx5ruGYXcmw3fUTfSnL2dw7GieWXJRnlae3r03N96E5W2Hcek=w1280",
    desc: "Custom deck and covered outdoor living space designed to extend the home's usable footprint year-round.",
  },
  {
    title: "Full Home Remodel",
    category: "Renovation",
    img: "https://lh3.googleusercontent.com/sitesv/APaQ0SQ_91JZd1kK975u-YFhkXApPd4BHGSMmFz0vPXOkgONNYqB5i9PTIdsCjaV2aym8jux6tJQndrbRD8rGPt4rU7rDKDUsUHhTKPJDtlwUYXOOCnrKWWlONpTyxew6tkN4u5KgKT5mOlLmx4fgLKneRPf_MhVCd878ob_UqKxpnJQ2nH4SkY28iob2F9OHtBe7gh2bjxPV6CGDLZHARbDLPH_9KrdsFzl8coQ=w1280",
    desc: "A complete top-to-bottom remodel preserving original character while modernizing all systems and finishes.",
  },
  {
    title: "Master Suite Addition",
    category: "Custom Addition",
    img: "https://lh3.googleusercontent.com/sitesv/APaQ0SR9RC_3zAEZq1yjYbZ8qTcSzYcDANNKlBihzdJZXTAmkArZL4eb_rpoV4MMLcqip3BxeibFNRz6Wvzt3Kyu7Z4xRp4zVd88HIBeDrLpfyTQTmjnAqbEm6Y0lntJO4HoqqFzvpfye5JTVcuW9rXedHifrRYZ7s09e1CCoabEieimYo6lknttsIonXS5xwVxYzS7JXj5h1FQQ9_j1Kz2v7Nus9-zdCB94_f2U=w1280",
    desc: "A luxurious master suite addition with walk-in closet, spa bath, and private sitting area.",
  },
  {
    title: "Basement Bar & Entertainment",
    category: "Finished Basement",
    img: "https://lh3.googleusercontent.com/sitesv/APaQ0SSD9_vtYqvCzsEVaqujvp8PwHict-PJsPs3UYoVZifYA_jCF9iht3KNDJPUslcWPjjDlMqpkPNxVBqhKnzpcoMLeR60ZRnpFHRWSdrXGeh3bav_UPjkZX_vg61fZAHebOB3-6Z_-_NMZcdTb2bto5l0HhNNGi0S_pd_YN_hlfQ-7t4Puf_jlM0dev3P9Ntr6_5A3zci5Wg0wJZUf_B3GGmg3avPxW_fO21PgMY=w1280",
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
                    unoptimized
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
