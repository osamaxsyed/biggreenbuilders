import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Big Green Builders",
  description:
    "Get in touch with Big Green Builders to discuss your custom addition, new construction, or finished basement project.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 bg-secondary-container text-on-secondary-container font-sans text-xs font-bold tracking-[0.2em] rounded-lg uppercase">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-black text-on-primary leading-tight max-w-3xl">
            Let&apos;s discuss{" "}
            <span className="text-on-primary-container">your vision.</span>
          </h1>
          <p className="mt-6 text-on-primary/70 font-sans text-lg max-w-xl">
            We&apos;re currently accepting inquiries for upcoming project starts.
            Fill out the form below or reach out directly—Fahad responds personally.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-surface px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-serif font-bold text-primary mb-8">
                Request a Consultation
              </h2>
              <form
                action={`mailto:fahad@biggreenbuilders.com`}
                method="POST"
                encType="text/plain"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-widest text-outline font-bold mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-sans text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-widest text-outline font-bold mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-sans text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-outline font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-sans text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-outline font-bold mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-sans text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="(555) 555-0100"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-outline font-bold mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-sans text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  >
                    <option value="">Select a project type...</option>
                    <option value="custom-addition">Custom Addition</option>
                    <option value="new-construction">New Construction</option>
                    <option value="finished-basement">Finished Basement</option>
                    <option value="renovation">Full Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-outline font-bold mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-sans text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Describe your project, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold font-sans text-base hover:bg-primary-container transition-all duration-200 active:opacity-80"
                >
                  Send Message
                </button>

                <p className="text-xs text-on-surface-variant font-sans text-center">
                  We typically respond within one business day.
                </p>
              </form>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-lg font-serif font-bold text-primary mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:fahad@biggreenbuilders.com"
                    className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors font-sans text-sm"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary flex-shrink-0">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    fahad@biggreenbuilders.com
                  </a>
                </div>
              </div>

              <div className="border-t border-outline-variant pt-8">
                <h3 className="text-lg font-serif font-bold text-primary mb-4">
                  What to Expect
                </h3>
                <ol className="space-y-4">
                  {[
                    { step: "01", text: "We review your inquiry and reach out to schedule an initial call." },
                    { step: "02", text: "We visit the site and assess the project scope together." },
                    { step: "03", text: "You receive a detailed, transparent budget proposal." },
                    { step: "04", text: "If we're a fit, we get to work." },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <span className="font-serif font-black text-primary text-lg leading-none w-8 flex-shrink-0">
                        {item.step}
                      </span>
                      <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-t border-outline-variant pt-8">
                <h3 className="text-lg font-serif font-bold text-primary mb-4">
                  Availability
                </h3>
                <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
                  We are a boutique firm accepting{" "}
                  <strong className="text-primary">ten or fewer projects per year</strong>.
                  Spots fill quickly. We encourage you to reach out early to
                  secure your place in our build schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
