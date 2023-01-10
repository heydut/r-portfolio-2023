// Design
import "./UIDesign.scss";
// Libraries
import Marquee from "react-fast-marquee";
// Components
import uidesign from "../../Data/Uidesign";
//////////////////////////////////////////////////////////////

const UIDesign = (props) => {
  return (
    <section id="uidesign-section">
      <div className="uidesign">
        <div className="categories-header">
          <h1>UI Design</h1>
        </div>
        <Marquee
          pauseOnHover="true"
          direction="left"
          gradientColor={[241, 241, 241]}
          className="uidesign-slide1"
        >
          <div className="uidesign-slide-body">
            {uidesign.slice(0, 4).map((slides) => {
              return (
                <div key={slides.id}>
                  <img src={slides.image} alt="slides" />
                </div>
              );
            })}
          </div>
        </Marquee>
        <Marquee
          pauseOnHover="true"
          direction="right"
          gradientColor={[241, 241, 241]}
          className="uidesign-slide2"
        >
          <div className="uidesign-slide-body">
            {uidesign.slice(4, 8).map((slides) => {
              return (
                <div key={slides.id}>
                  <img src={slides.image} alt="slides" />
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default UIDesign;
