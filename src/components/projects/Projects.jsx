import { useState } from "react";
import "../projects/projects.css";
import components from "../../assests/hardware_project/components.png";
import pin_diagram from "../../assests/hardware_project/MQ3_and_SIM900.png";
import pcb from "../../assests/hardware_project/pcb.png";
import schematic_diagram from "../../assests/hardware_project/schematic_diagram.png";
import score_edit_log from "../../assests/software_project/score_edit_log.png";
import leaderboard from "../../assests/software_project/leaderboard.png";
import submission from "../../assests/software_project/submission.png";
import grades from "../../assests/software_project/grades.png";
import ratings from "../../assests/software_project/ratings.png";

const Projects = () => {
  const [toggleHardware, setToggleHardware] = useState(false);
  const [toggleSoftware, setToggleSoftware] = useState(false);
  const [indexHardware, setIndexHardware] = useState(0);
  const [indexSoftware, setIndexSoftware] = useState(0);
  return (
    <section className="section" id="projects">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">Showcasing My Project Endeavors</span>
      <div className="project_container_grid">
        <div>
          <div className="project_categories">
            <h2 className="project_name">Hardware Project</h2>
            <a
              href="https://github.com/sagini18/Hardware-Project.git"
              className="project_details"
              style={{ textDecoration: "none" }}
            >
              Further more details <i className="uil uil-link"></i>
            </a>
          </div>
          <div
            className={
              toggleHardware === false ? `project_flex ` : `project_visibility`
            }
            onClick={() => setToggleHardware(true)}
          >
            {[
              {
                title: "Components",
                source: components,
              },
              { title: "Pin Diagram", source: pin_diagram },
              { title: "PCB", source: pcb },
              { title: "Schematic Diagram", source: schematic_diagram },
            ].map((pro, index) => (
              <div className="project_container" key={index}>
                <div className="project_body">
                  <img
                    src={pro.source}
                    onClick={() => setIndexHardware(index)}
                    draggable="false"
                    alt={pro.title}
                  />
                </div>
                <div className="project_header">
                  <h2 className="project_heading">{pro.title}</h2>
                </div>
              </div>
            ))}
          </div>

          {[components, pin_diagram, pcb, schematic_diagram].map(
            (pro, indexH) =>
              indexHardware === indexH && (
                <div
                  key={indexH}
                  className={
                    toggleHardware === true
                      ? ` services_modal project_active_model`
                      : `project_visibility`
                  }
                >
                  <i
                    className="uil uil-times-circle project_modal-close"
                    onClick={() => setToggleHardware(false)}
                  ></i>
                  <img
                    src={pro}
                    className="project_image"
                    draggable="false"
                    alt="Can't load"
                  />
                </div>
              )
          )}
        </div>
        <div>
          <div className="project_categories">
            <h2 className="project_name">Software Project</h2>
            <a
              href="https://github.com/sagini18/NETS.git"
              className="project_details"
            >
              Further more details <i className="uil uil-link"></i>
            </a>
          </div>
          <div
            className={
              toggleSoftware === false ? `project_flex ` : `project_visibility`
            }
            onClick={() => setToggleSoftware(true)}
          >
            {[
              { title: "Submission", source: submission },
              { title: "Score Edit Log", source: score_edit_log },
              { title: "Leaderboard", source: leaderboard },
              { title: "Grades", source: grades },
              { title: "Ratings", source: ratings },
            ].map((pro, indexS) => (
              <div className="project_container" key={indexS}>
                <div className="project_body">
                  <img
                    src={pro.source}
                    onClick={() => setIndexSoftware(indexS)}
                    draggable="false"
                    alt={pro.title}
                  />
                </div>
                <div className="project_header">
                  <h2 className="project_heading">{pro.title}</h2>
                </div>
              </div>
            ))}
          </div>

          {[submission, score_edit_log, leaderboard, grades, ratings].map(
            (pro, indexSoft) =>
              indexSoftware === indexSoft && (
                <div
                  key={indexSoft}
                  className={
                    toggleSoftware === true
                      ? ` services_modal project_active_model`
                      : `project_visibility`
                  }
                >
                  <i
                    className="uil uil-times-circle project_modal-close"
                    onClick={() => setToggleSoftware(false)}
                  ></i>{" "}
                  <img
                    src={pro}
                    className="project_image"
                    draggable="false"
                    alt="Can't load"
                  />
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
