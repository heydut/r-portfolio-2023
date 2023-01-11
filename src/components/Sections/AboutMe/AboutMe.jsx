// Design
import "./AboutMe.scss";
import memojihi from "../../../assets/memoji-love.png";
// Libraries
import { useState } from "react";
// Components
import tech from "../../Data/Tech";
//////////////////////////////////////////////////////////////

const AboutMe = () => {
  const [openTech, setOpenTech] = useState(true);
  const [openEducation, setOpenEducation] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const handleOpenTech = () => {
    setOpenTech(true);
    setOpenEducation(false);
    setOpenSkills(false);
  };
  const handleOpenEducation = () => {
    setOpenTech(false);
    setOpenEducation(true);
    setOpenSkills(false);
  };
  const handleOpenSkills = () => {
    setOpenTech(false);
    setOpenEducation(false);
    setOpenSkills(true);
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
            <div
              className="aboutme-rightside"
              onClick={handleOpenTech}
              onDoubleClick={() => setOpenTech(false)}
            >
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
            <div
              className="aboutme-rightside"
              onClick={handleOpenEducation}
              onDoubleClick={() => setOpenEducation(false)}
            >
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
            <div
              className="aboutme-rightside"
              onClick={handleOpenSkills}
              onDoubleClick={() => setOpenSkills(false)}
            >
              <div className="aboutme-header">
                <i
                  className={`fa-solid fa-caret-${
                    openSkills ? "down" : "right"
                  }`}
                />
                <h2>Skills</h2>
              </div>
            </div>
          </div>

          <div className="aboutme-leftside">
            <img src={memojihi} alt="memoji" className="memojihi" />
            <p>
              &nbsp;&nbsp;I'm a graphic designer and soon I'll be a junior
              software developer! I'm currently doing the Bootcamp Master
              Software on CodeNation and my objective is to work with web design
              as a front-end developer. <br />
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
