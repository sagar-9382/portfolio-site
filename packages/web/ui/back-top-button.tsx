import { ArrowUp } from "lucide-react";
import { Button } from "./button";

export const BackTopButton = ({
  scrolled,
  ...props
}: React.ComponentProps<"button"> & { scrolled: boolean }) => {
  return (
    <Button
      className={`back-to-top ${scrolled ? "is-visible" : ""}`}
      size="icon"
      aria-label="Back to top"
      tabIndex={scrolled ? 0 : -1}
      aria-hidden={!scrolled}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        });
        document.getElementById("top")?.focus({ preventScroll: true });
      }}
    >
      <ArrowUp />
    </Button>
  );
};
