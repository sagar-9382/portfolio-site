"use client";

import { useEffect, useState } from "react";
import { links } from "../../core/data/json";
import { BackTopButton } from "../ui/back-top-button";
import { Header } from "../ui/header";

export function SiteNavigaation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 400);
      const current = links
        .filter(({ id }) => {
          const section = document.getElementById(id);
          return section && section.getBoundingClientRect().top <= 180;
        })
        .at(-1);
      setActive(current?.id ?? "");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header active={active} open={open} setOpen={setOpen} />
      <BackTopButton scrolled={scrolled} />
    </>
  );
}
