const logo = "/logo.jpg";

type Props = {
  onNavigate: (to: string) => void;
};

const footerLinks = {
  product: [
    { label: "Build log", href: "/#build" },
    { label: "Process", href: "/#process" },
    { label: "Roadmap", href: "/#roadmap" },
  ],
  community: [
    { label: "@Flaretechxyz on X", href: "https://x.com/Flaretechxyz" },
    { label: "Virtuals Protocol", href: "https://app.virtuals.io" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
};

export function SiteFooter({ onNavigate }: Props) {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <button
              type="button"
              className="flex items-center gap-3 group"
              onClick={() => onNavigate("/")}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2a2a2a] border-2 border-[#D0D0D0] flex items-center justify-center overflow-hidden p-1.5">
                <img
                  src={logo}
                  alt="Flaretech"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display text-sm font-medium">Flaretech</span>
            </button>

            <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
              Bionic robotics, built in public. From plywood to robotics to
              intelligence to on-chain autonomy.
            </p>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8">
            <div className="grid gap-8 sm:grid-cols-3">
              {/* Product Links */}
              <div className="space-y-4">
                <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Product
                </h4>
                <ul className="space-y-3">
                  {footerLinks.product.map((link) => (
                    <li key={link.label}>
                      <button
                        type="button"
                        onClick={() => onNavigate(link.href)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Community Links */}
              <div className="space-y-4">
                <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Community
                </h4>
                <ul className="space-y-3">
                  {footerLinks.community.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div className="space-y-4">
                <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Company
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <button
                        type="button"
                        onClick={() => onNavigate(link.href)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Flaretech. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Building in public
          </div>
        </div>
      </div>
    </footer>
  );
}
