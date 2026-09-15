import { Check } from "lucide-react";
import { SectionHeading } from "./section-heading";

export const ExperienceSection = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="section shell">
        <SectionHeading
          number="02"
          label="THE JOURNEY"
          title={
            <>
              Hands on.
              <br />
              <em>All the way through.</em>
            </>
          }
          subTitle="Years of writing code. Just as much care for what happens after."
        />
        <div className="timeline">
          <article className="role" data-reveal>
            <div className="role-company">
              <span className="timeline-dot" />
              <p>MAR 2022 — PRESENT</p>
              <h3>Xeon</h3>
              <span className="current-badge">Current</span>
            </div>
            <div className="role-content">
              <h4>Senior Software Engineer</h4>
              <p className="role-subtitle">PocketX Development Lead</p>
              <p>
                Leading the people and the engineering behind PocketX ERP, used
                by approximately 65 to 90 clients. I connect day-to-day
                development with reliable production delivery.
              </p>
              <ul>
                <li>
                  <Check /> Lead a team of six developers and one QA engineer
                </li>
                <li>
                  <Check /> Review code and build across .NET, React, and
                  Next.js
                </li>
                <li>
                  <Check /> Manage CI/CD pipelines and production deployments
                </li>
              </ul>
            </div>
          </article>
          <article className="role" data-reveal>
            <div className="role-company">
              <span className="timeline-dot" />
              <p>OCT 2016 — PRESENT</p>
              <h3>ConstantMD</h3>
              <span className="current-badge">Current</span>
            </div>
            <div className="role-content">
              <h4>Senior Software Engineer</h4>
              <p className="role-subtitle">From intern to sole engineer</p>
              <p>
                Started with curiosity and grew into ownership. Today, I take
                individual responsibility for the delivery and maintenance of
                multiple client platforms.
              </p>
              <ul>
                <li>
                  <Check /> Independently delivered three public web platforms
                </li>
                <li>
                  <Check /> Contributed to school management and e-commerce
                  products
                </li>
                <li>
                  <Check /> Work across .NET, React, SQL Server, MySQL, and
                  Azure
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
