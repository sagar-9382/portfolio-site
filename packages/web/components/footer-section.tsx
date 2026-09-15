import { ArrowUpRight, Mail } from "lucide-react";
import { LinkedinIcon } from "../icons/linkedin";

export const FooterSection = () => {
  return (
    <footer className="shell footer">
      <div>
        <a className="wordmark" href="#top">
          sagar<span>.</span>
        </a>
        <p>Built with thought. Made to last.</p>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} Md Shakhawat Hossain Sagar
      </p>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/md-sakhawat-hossain-sagar-57850915b/"
          target="_blank"
          rel="noreferrer"
          aria-label="Connect on LinkedIn"
        >
          <LinkedinIcon size={18} />
        </a>
        <a href="mailto:sagar932@gmail.com" aria-label="Email Sagar">
          <Mail size={18} />
        </a>
        <a href="tel:+8801721946764">
          Say hello <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
};
