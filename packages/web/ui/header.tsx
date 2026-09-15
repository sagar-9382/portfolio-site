import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { links } from "../../core/data/json";
import { HeaderProps } from "../../core/types/header";
import { Button } from "./button";

export const Header = ({ active, open, setOpen }: HeaderProps) => {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a
          className="wordmark"
          href="#top"
          onClick={() => setOpen(false)}
          aria-label="Sagar, back to home"
        >
          sagar<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="header-cv">
            <a
              href="/downloads/Sagar_Senior_Full_Stack_DotNET_Engineer_CV.pdf"
              download
            >
              Download CV <Download />
            </a>
          </Button>
          <Button
            id="menu-toggle"
            variant="ghost"
            size="icon"
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
            <ArrowUpRight size={16} />
          </a>
        ))}
      </nav>
    </header>
  );
};
