// Design
import "./AboutMe.scss";
import memojihi from "../../../assets/memoji-love.png";
// Libraries
import { useState } from "react";
// Components
import tech from "../../Data/Tech";
import skills from "../../Data/Skills";
//////////////////////////////////////////////////////////////

const AboutMe = () => {
  const [openTech, setOpenTech] = useState(true);
  const [openEducation, setOpenEducation] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const handleOpenTech = () => {
    if (openTech === false) {
      setOpenTech(true);
      setOpenEducation(false);
      setOpenSkills(false);
    } else {
      setOpenTech(false);
      setOpenEducation(false);
      setOpenSkills(false);
    }
  };
  const handleOpenEducation = () => {
    if (openEducation === false) {
      setOpenTech(false);
      setOpenEducation(true);
      setOpenSkills(false);
    } else {
      setOpenTech(false);
      setOpenEducation(false);
      setOpenSkills(false);
    }
  };
  const handleOpenSkills = () => {
    if (openSkills === false) {
      setOpenTech(false);
      setOpenEducation(false);
      setOpenSkills(true);
    } else {
      setOpenTech(false);
      setOpenEducation(false);
      setOpenSkills(false);
    }
  };

  return (
    <section id="aboutme-section">
      <div className="aboutme">
        <div className="categories-header">
          <h1>About Me</h1>
        </div>
        <div className="aboutme-body">
          <div className="aboutme-rightside-main">
            {" "}
            <div className="aboutme-rightside" onClick={handleOpenTech}>
              <div className="aboutme-header">
                <i
                  className={`fa-solid fa-caret-${openTech ? "down" : "right"}`}
                />
                <h2>Tech</h2>
              </div>
              {openTech && (
                <div className="aboutme-techicons">
                  <div className="aboutme-techicons-row">
                    {tech.slice(0, 11).map((data) => {
                      return (
                        <div key={data.id}>
                          {data.icon}
                          {/* <p>{data.title}</p> */}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className="aboutme-rightside" onClick={handleOpenEducation}>
              <div className="aboutme-header">
                <i
                  className={`fa-solid fa-caret-${
                    openEducation ? "down" : "right"
                  }`}
                />
                <h2>Education</h2>
              </div>

              {openEducation && (
                <div className="aboutme-education">
                  <div className="aboutme-education-course">
                    <div className="education-year">2022 • 2022</div>
                    <div className="education-line">
                      <i className="fa-solid fa-star" />
                      <div className="line"></div>
                    </div>
                    <div className="education-info-box">
                      <h3>Master: Software</h3>
                      <p>CodeNation Skills Bootcamp</p>

                      <p>
                        In the course I learned skills and knowledge needed to
                        begin my career as a Junior Developer,
                      </p>
                    </div>
                  </div>
                  <div className="aboutme-education-course">
                    <div className="education-year">2012 • 2017</div>
                    <div className="education-line">
                      <i className="fa-solid fa-star" />
                      <div className="line"></div>
                    </div>
                    <div className="education-info-box">
                      <h3>Law Bachelor</h3>
                      <p>PUC Minas</p>

                      <p>
                        Bachelor in law with a specialization in consumer law,
                        graduated from a Brazilian university.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="aboutme-rightside" onClick={handleOpenSkills}>
              <div className="aboutme-header">
                <i
                  className={`fa-solid fa-caret-${
                    openSkills ? "down" : "right"
                  }`}
                />
                <h2>Skills</h2>
              </div>
              {openSkills && (
                <div className="aboutme-skillstags">
                  <div className="aboutme-skillstags-list">
                    {skills.map((data) => {
                      return (
                        <div key={data.id}>
                          <p
                            style={{
                              backgroundColor: `${data.color}`,
                              color: `${data.textColor}`,
                            }}
                          >
                            {data.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="aboutme-leftside">
            <img src={memojihi} alt="memoji" className="memojihi" />
            <p>
              &nbsp;&nbsp;As a junior front-end web developer with a background
              in graphic design and UI/UX, I bring a unique combination of
              technical skills and creative design to every project. <br />
              <br /> &nbsp;&nbsp;And I love researching design trends,
              inspiration for future projects and lots of ideas to keep
              improving my skills. <br />
              <br />
              &nbsp;&nbsp;I am now looking for an opportunity where I can
              continue to learn, grow and demonstrate the value I can bring to
              your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
