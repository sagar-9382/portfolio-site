import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

export const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="shell contact-inner" data-reveal>
        <div>
          <p className="availability">
            <span /> OPEN TO LOCAL & REMOTE ROLES
          </p>
          <h2>
            Good things start
            <br />
            with a <em>conversation.</em>
          </h2>
          <p>
            Have a role, a project, or an interesting problem?
            <br />
            I’d love to hear what you’re working on.
          </p>
          <Button asChild className="contact-button">
            <a href="mailto:sagar932@gmail.com">
              Let’s talk <ArrowUpRight />
            </a>
          </Button>
          <a className="contact-email" href="mailto:sagar932@gmail.com">
            sagar932@gmail.com <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="contact-decoration" aria-hidden="true">
          <span>✳</span>
          <p>
            Thoughtful work.
            <br />
            Good people.
            <br />
            Something that matters.
          </p>
        </div>
      </div>
    </section>
  );
};
