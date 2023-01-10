// Design
import "./AboutMe.scss";
import memojihi from "../../../assets/memoji-hi.png";
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
          <div>
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
                  <div className="aboutme-techicons-ui">
                    {tech.slice(0, 6).map((data) => {
                      return (
                        <div key={data.id}>
                          {data.icon}
                          {/* <p>{data.title}</p> */}
                        </div>
                      );
                    })}
                  </div>
                  <div className="aboutme-techicons-js">
                    {tech.slice(6, 11).map((data) => {
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
            </div>
          </div>

          <div className="aboutme-leftside">
            <img src={memojihi} alt="memoji" className="memojihi" />
            <p>
              I'm a graphic designer and soon I'll be a junior software
              developer! I'm currently doing the Bootcamp Master Software on
              CodeNation and my objective is to work with web design as a
              front-end developer. I love researching design trends, inspiration
              for future projects and lots of ideas to keep improving my skills.
              I am now looking for an opportunity where I can continue to learn,
              grow and demonstrate the value I can bring to your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
