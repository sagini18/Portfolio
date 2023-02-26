import Forntend from "./Frontend";
import Backend from "./Backend";
import "../skills/skills.css";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical Level</span>
      <div className="skills_container container grid">
        <Forntend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
