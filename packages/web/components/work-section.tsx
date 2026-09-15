import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Check,
  Database,
  GitBranch,
  Layers3,
} from "lucide-react";
import { projects } from "../../core/data/json";
import { SectionHeading } from "./section-heading";

export const WorkSection = () => {
  return (
    <>
      <section className="section shell" id="work">
        <SectionHeading
          number="01"
          label="SELECTED WORK"
          title={
            <>
              Real problems.
              <br />
              <em>Thoughtful solutions.</em>
            </>
          }
          subTitle="A selection of the products I help build, ship, and keep moving."
        />
        <article className="featured-project" data-reveal>
          <div className="featured-copy">
            <p className="eyebrow">
              FEATURED PROJECT <span className="tiny-dot" /> BUSINESS SOFTWARE
            </p>
            <h3>
              PocketX ERP<span>.</span>
            </h3>
            <p>
              Helping businesses manage the everyday, so they can focus on
              what’s next.
            </p>
            <p className="featured-detail">
              At Xeon, I lead development with six developers and one QA
              engineer — staying hands-on with the code, reviewing the work, and
              taking releases through production.
            </p>
            <div className="tags">
              {["ASP.NET Core", "GraphQL", "Next.js", "Kubernetes"].map(
                (tag) => (
                  <span key={tag}>{tag}</span>
                ),
              )}
            </div>
            <a
              className="project-link"
              href="https://pocketx.app/"
              target="_blank"
              rel="noreferrer"
            >
              Explore PocketX <ArrowUpRight size={17} />
            </a>
          </div>
          <div
            className="product-visual"
            aria-label="Illustration of PocketX engineering scope"
          >
            <div className="architecture-card">
              <div className="architecture-top">
                <span className="product-mark">
                  <Box size={19} />
                </span>
                <strong>PocketX</strong>
                <span className="architecture-badge">ERP</span>
              </div>
              <div className="architecture-title">
                <span>BUSINESS. CONNECTED.</span>
                <h4>
                  One product.
                  <br />
                  The whole picture.
                </h4>
              </div>
              <div className="architecture-modules">
                <div>
                  <Layers3 size={18} />
                  <span>Frontend</span>
                  <strong>Next.js</strong>
                </div>
                <div>
                  <Database size={18} />
                  <span>Backend</span>
                  <strong>.NET Core</strong>
                </div>
                <div>
                  <GitBranch size={18} />
                  <span>Delivery</span>
                  <strong>CI/CD</strong>
                </div>
              </div>
              <div className="architecture-bottom">
                <span>
                  <Check size={13} /> Built for daily operations
                </span>
                <span>65–90 clients</span>
              </div>
            </div>
            <span className="visual-caption">
              FULL-STACK DEVELOPMENT · TECHNICAL LEADERSHIP
            </span>
          </div>
        </article>
        <div className="project-grid">
          {projects.map(
            (
              { name, category, description, url, icon: Icon, color, note },
              index,
            ) => (
              <article
                className={`project-card ${color}`}
                key={name}
                data-reveal
              >
                <div className="project-card-top">
                  <span className="project-icon">
                    <Icon size={25} strokeWidth={1.5} />
                  </span>
                  <span className="project-number">0{index + 2}</span>
                </div>
                <p className="eyebrow">{category}</p>
                <h3>
                  <a href={url} target="_blank" rel="noreferrer">
                    {name}
                    <ArrowUpRight size={23} />
                  </a>
                </h3>
                <p className="project-description">{description}</p>
                <p className="project-note">{note}</p>
              </article>
            ),
          )}
          <a className="next-project" href="#contact" data-reveal>
            <span className="next-project-arrow">
              <ArrowUpRight size={30} strokeWidth={1.3} />
            </span>
            <p>Something in mind?</p>
            <h3>
              Your next project
              <br />
              could go here.
            </h3>
            <span>
              Let’s build it together <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </section>
    </>
  );
};
