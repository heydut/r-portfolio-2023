// Design
import "./Hero.scss";
import "../../assets/blobz.css";
import glitter from "../../assets/Glitter.png";
import memoji from "../../assets/memoji.png";
import InstagramHand from "../../assets/InstagramHand.png";
import InstagramGif from "../../assets/InstagramGif.gif";
// Libraries
// Components
//////////////////////////////////////////////////////////////

const Hero = () => {
  return (
    <section id="hero-section">
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
                  I'm a graphic designer and I create cool things! I recently
                  finished a three month bootcamp in software development and
                  now I'm looking for an opportunity be a junior frontend
                  developer.
                </p>
              </div>
            </div>
            <div className="hero-header-buttons">
              <button>
                <a href="#section-frontend">Portfolio</a>
              </button>
              <button>
                <a href="#section-contact">Contact Me</a>
              </button>
            </div>
          </div>
          <div className="hero-blobs">
            <div className="hero-blobs-instagram">
              <img src={memoji} alt="memoji" />
            </div>
            <div
              className="tk-blob blob-two"
              style={{ "--fill": "#ff5874", "--time": "25s", "--amount": "1" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 319.2 356.7">
                <path d="M271.9 50.3c30.6 29.3 51.3 75.5 46.6 123.9-4.6 48.4-34.6 99-86.5 136.3s-125.6 61.4-168.3 35.3S9.4 243.5 3.4 177.3C-2.7 111.2-3.1 55.2 24 26.7 51.1-1.9 105.9-2.9 153.4 2.8c47.6 5.8 88 18.2 118.5 47.5z"></path>
              </svg>
            </div>
            <div
              className="tk-blob blob-one"
              style={{ "--fill": "#ff6d85", "--time": "15s", "--amount": "1" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
                <path d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"></path>
              </svg>
            </div>
            <div
              className="tk-blob blob-three"
              style={{ "--fill": "#e43a56", "--time": "20s", "--amount": "1" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317.5 353.7">
                <path d="M291.8 55.3c30.4 39.9 30.7 102 17 160.4-13.8 58.3-41.6 112.9-84 130.9s-99.3-.6-137-30C50.2 287.1 32 246.9 17 200.5 2.1 154.1-9.6 101.4 11.5 63.6 32.6 25.8 86.6 2.8 143.8.2c57.2-2.6 117.6 15.2 148 55.1z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
