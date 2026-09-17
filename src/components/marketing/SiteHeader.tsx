import { useLocation } from "react-router-dom";
import logo from "/logo.jpg";
import PillNav from "@/components/reactbits/PillNav";

type Props = {
  onNavigate: (to: string) => void;
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Build log", href: "/#build" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
  { label: "Follow on X", href: "https://x.com/Flaretechxyz" },
];

export function SiteHeader({ onNavigate }: Props) {
  const location = useLocation();

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container flex justify-center pt-2">
        <PillNav
          logo={logo}
          logoAlt="Flaretech"
          items={navItems}
          activeHref={location.pathname}
          baseColor="#D0D0D0"
          pillColor="#2a2a2a"
          hoveredPillTextColor="#1a1a1a"
          pillTextColor="#A0A0A0"
          initialLoadAnimation={true}
          className="logo-enlarged"
          style={{
            '--nav-h': '50px',
            '--logo': '46px'
          } as React.CSSProperties}
          logoClassName="logo-rounded-frame"
        />
      </div>
    </header>
  );
}
