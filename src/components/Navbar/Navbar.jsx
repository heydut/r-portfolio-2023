// Design
import "./Navbar.scss";
import dutLogo from "../../assets/Dut-logo.png";
import dutLogoWhite from "../../assets/Dut-logo-white.png";
// Libraries
import { useState, useEffect } from "react";
// Components
//////////////////////////////////////////////////////////////

const Navbar = () => {
  // Function to find my scroll postion for set sticky navbar
  const [scrollPosition, setScrollPosition] = useState();
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollPosition(scrollPosition);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="navbar-section"
      className={` ${scrollPosition === 0 ? "" : "navbar-sticky"}`}
    >
      <div className="container">
        <div id="navbar">
          <div>
            <img
              src={scrollPosition === 0 ? dutLogoWhite : dutLogo}
              alt="dut-logo"
              className="navbar-logo"
            />
          </div>
          <div
            className={` ${
              scrollPosition === 0 ? "navbar-links" : "navbar-links-sticky"
            }`}
          >
            <ul>
              <li>Home</li>
              <li>Portfolio</li>
              <li>About</li>
            </ul>
          </div>
          <div className="navbar-cv">
            <ul>
              <li>
                <a
                  href="../../../public/assets/Professional CV Resume - Mayranne Nascimento.pdf"
                  download
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="navbar-mobile">
          <i className="fa-solid fa-bars" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
