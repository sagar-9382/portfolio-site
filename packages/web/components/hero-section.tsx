import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  MapPin,
} from "lucide-react";
import { PortfolioImage } from "../../platform/image/indext";
import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="availability">
          <span /> Open to new opportunities
        </p>
        <p className="hero-hello">
          Hello, I’m Sagar <span className="hello-line" />
        </p>
        <h1 id="hero-title">
          Good software.
          <br />
          Built with <em>care.</em>
        </h1>
        <p className="hero-role">Senior Full Stack .NET Engineer</p>
        <p className="hero-description">
          I turn complex business needs into software that just works. From the
          first line of code to production, I take care of the whole picture.
        </p>
        <div className="hero-actions">
          <Button asChild>
            <a href="#work">
              Explore my work <ArrowUpRight />
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#contact">
              Let’s talk <ArrowRight />
            </a>
          </Button>
        </div>
        <div className="hero-location">
          <MapPin size={14} /> Dhaka, Bangladesh <span>·</span> Working beyond
          borders
        </div>
      </div>
      <div className="portrait-composition">
        <div className="portrait-orbit" aria-hidden="true" />
        <div className="portrait-frame">
          <PortfolioImage
            src="/images/sagar-headshot.png"
            alt="Md Shakhawat Hossain Sagar"
            width={1122}
            height={1402}
            priority
            sizes="(max-width: 760px) 80vw, 400px"
          />
          <div className="portrait-label">
            <span>THE PERSON BEHIND THE CODE</span>
            <strong>Md Shakhawat Hossain Sagar</strong>
          </div>
        </div>
        <div className="experience-note">
          <span className="note-icon">
            <Code2 size={22} />
          </span>
          <div>
            <strong>Building since 2016</strong>
            <span>Still curious. Always learning.</span>
          </div>
        </div>
        <span className="portrait-spark" aria-hidden="true">
          ✳
        </span>
        <p className="portrait-aside">
          A little thoughtfulness goes a long way.
        </p>
      </div>
      <a className="scroll-cue" href="#work">
        <span>
          <ArrowDown size={15} />
        </span>{" "}
        A little further, a little more about me
      </a>
    </section>
  );
};
