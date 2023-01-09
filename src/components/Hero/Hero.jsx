// Design
import "./Hero.scss";
import "../../assets/blobz.css";
import glitter from "../../assets/Glitter.png";
import InstagramHand from "../../assets/InstagramHand.png";
import InstagramGif from "../../assets/InstagramGif.gif";
// Libraries
// Components
//////////////////////////////////////////////////////////////

const Hero = () => {
  return (
    <section id="hero-section">
      <div className="hero-section-background" />
      <div className="container">
        <div id="hero">
          <div className="hero-header">
            <div className="hero-header-text">
              <div className="hero-header-hello">
                <h1>Hello!</h1>
                <img src={glitter} alt="Glitter" />
              </div>
              <h2>
                You can call me {""}
                <u>
                  <span>Dut</span>
                </u>
              </h2>
              <div>
                <p>
                  I'm a graphic designer, I recently finished a three month
                  bootcamp in software development and now I'm looking for an
                  opportunity be a junior software developer.{" "}
                </p>
              </div>
            </div>
            <div className="hero-header-buttons">
              <button>Portfolio</button>
              <button>Contact Me</button>
            </div>
          </div>
          <div className="hero-blobs">
            <div className="hero-blobs-background"></div>
            <div className="hero-blobs-background-white"></div>
            <div className="hero-blobs-instagram">
              <img src={InstagramHand} alt="InstagramHand" />
              <img src={InstagramGif} alt="InstagramGif" />
            </div>
            <div
              className="tk-blob blob-two"
              style={{ "--fill": "#ff5874", "--time": "50s", "--amount": "1" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317.5 353.7">
                <path d="M291.8 55.3c30.4 39.9 30.7 102 17 160.4-13.8 58.3-41.6 112.9-84 130.9s-99.3-.6-137-30C50.2 287.1 32 246.9 17 200.5 2.1 154.1-9.6 101.4 11.5 63.6 32.6 25.8 86.6 2.8 143.8.2c57.2-2.6 117.6 15.2 148 55.1z"></path>
              </svg>
            </div>
            <div
              className="tk-blob blob-one"
              style={{ "--fill": "#ff6d85", "--time": "25s", "--amount": "4" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425.9 377">
                <path d="M389.3 42c39.8 40.8 47.5 116.3 21.3 165.4-26.1 49.1-86 71.8-145.9 104.3-59.8 32.5-119.6 74.8-168.9 63.4C46.5 363.7 7.6 298.5 1 235.7-5.5 173 20.3 112.5 59.8 71.9 99.3 31.2 152.4 10.2 215 2.8 277.5-4.7 349.5 1.2 389.3 42z"></path>
              </svg>
            </div>
            <div
              className="tk-blob blob-three"
              style={{ "--fill": "#e43a56", "--time": "30s", "--amount": "7" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
                <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
