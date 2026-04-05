import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-8 py-16 w-full max-w-7xl mx-auto">
        {/* Brand */}
        <div className="flex flex-col">
          <span className="text-lg font-serif font-bold text-on-primary mb-4 block">
            Big Green Builders
          </span>
          <p className="text-on-primary/60 font-sans text-sm leading-relaxed mb-6">
            Crafting premium residential spaces with radical transparency and
            artisan focus. Custom additions, new construction, and finished
            basements.
          </p>
          <p className="text-on-primary/50 text-sm font-sans">
            fahad@biggreenbuilders.com
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans text-sm uppercase tracking-wider text-on-primary font-bold">
            Navigation
          </h4>
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Projects", href: "/projects" },
            { label: "Hiring", href: "/hiring" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm uppercase tracking-wider text-on-primary/60 hover:text-on-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans text-sm uppercase tracking-wider text-on-primary font-bold">
            Get in Touch
          </h4>
          <p className="text-on-primary/60 font-sans text-sm leading-relaxed">
            Based in Princeton, NJ. Currently accepting inquiries for upcoming
            project starts.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-block bg-on-primary text-primary px-6 py-2.5 rounded-lg font-bold text-sm text-center hover:bg-primary-fixed transition-all duration-200 w-fit"
          >
            Request a Quote
          </Link>
          <p className="text-on-primary/40 text-xs mt-4 uppercase tracking-widest">
            © {new Date().getFullYear()} Big Green Builders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
