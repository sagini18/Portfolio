import { useState } from "react";
import "../services/services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What I offer</span>
      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services-icon"></i>
            <h3 className="services_title">
              Web <br /> Developer
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services_modal-title">Web Developer</h3>
              <p className="services_modal-description">
                Service with a year of experience. Providing quality of work to
                companies.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services_modal-info">
                    User-friendly website designs.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services_modal-info">
                    Build websites using programming languages.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services_modal-info">
                    Ux element interactions.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services_modal-info">
                    Develop mobile applications.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_content">
          <div>
            <i className="uil uil-arrow services-icon"></i>
            <h3 className="services_title">
              Ui/Ux <br /> Designer
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(2)}>
            View more
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services_modal-title">Ui/Ux Designer</h3>
              <p className="services_modal-description">
                Service with a year of experience. Providing quality of work to
                clients and companies.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services_modal-info">
                    Understand the needs and preferences of client.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services_modal-info">Create wireframes.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services_modal-info">
                    Organize content of the website.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services_modal-info">
                    Create interactive prototypes.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_content">
          <div>
            <i className="uil uil-edit services-icon"></i>
            <h3 className="services_title">
              Graphic <br /> Designer
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(3)}>
            View more
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services_modal-title">Graphic Designer</h3>
              <p className="services_modal-description">
                Service with less than a year of experience. Providing quality
                of work to clients and companies.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services_modal-info">
                    Creating logos, business cards.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services_modal-info">
                    Designing ads for print and digital media.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services_modal-info">
                    Creating animated videos and graphics.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services_modal-info">
                    Designing cover page of book and magazine.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle"></i>
                  <p className="services_modal-info">
                    Editing and enhancing photos, removing backgrounds
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
