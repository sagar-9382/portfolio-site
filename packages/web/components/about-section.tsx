import { ArrowDown } from "lucide-react";
import { skills } from "../../core/data/json";
import { SectionHeading } from "./section-heading";

export default function AboutSection() {
  return (
    <section className="section shell" id="about">
      <SectionHeading
        number="03"
        label="HOW I WORK"
        title={
          <>
            The full stack.
            <br />
            <em>And the bigger picture.</em>
          </>
        }
        subTitle="The tools matter. Knowing how they fit together matters more."
      />
      <div className="skills-grid">
        {skills.map(({ icon: Icon, name, detail, items }) => (
          <article className="skill" key={name} data-reveal>
            <Icon size={25} strokeWidth={1.4} />
            <h3>{name}</h3>
            <p>{detail}</p>
            <div className="skill-tags">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="about-story" data-reveal>
        <div>
          <p className="eyebrow">A LITTLE MORE PERSONAL</p>
          <h2>
            Curiosity started it.
            <br />
            <em>Ownership shaped it.</em>
          </h2>
          <p>
            I’m Md Shakhawat Hossain Sagar, a software engineer based in Dhaka.
            Since 2016, my work has grown from writing individual features to
            taking responsibility for whole products and the teams behind them.
          </p>
          <p>
            I enjoy connecting the details: a clear interface, a well-considered
            backend, and a release that’s ready for the real world.
          </p>
          <a
            className="text-link"
            href="/downloads/Sagar_Senior_Full_Stack_DotNET_Engineer_CV.docx"
            download
          >
            The full story, in my CV <ArrowDown size={15} />
          </a>
        </div>
        <div className="education-card">
          <p className="eyebrow">FOUNDATIONS & PERSPECTIVE</p>
          <div>
            <span>2019</span>
            <h3>B.Sc. in Computer Science & Engineering</h3>
            <p>Bangladesh University of Business and Technology</p>
          </div>
          <div>
            <span>2014</span>
            <h3>Diploma in Electronics</h3>
            <p>Bangladesh Polytechnic Institute</p>
          </div>
          <div>
            <span>2008</span>
            <h3>Secondary School Certificate</h3>
            <p>Bangladesh Pilot School</p>
          </div>
          <div className="languages">
            <span>LANGUAGES</span>
            <p>Bengali · Native</p>
            <p>
              English · Intermediate reading & writing, especially in technical
              contexts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
