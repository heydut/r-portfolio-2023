// Design
import "./FrontEnd.scss";
// Libraries
import { useState, useEffect } from "react";
// Components
import frontend from "../../Data/Frontend";
import FrontEndCards from "../../FrontEndCards/FrontEndCards";
//////////////////////////////////////////////////////////////

const FrontEnd = () => {
  // function to get screen width
  const [screenWidth, setScreenWidth] = useState(5000);
  const handleScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenWidth);
    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, [screenWidth]);

  console.log(screenWidth);

  return (
    <section id="frontend-section">
      <div className="frontend">
        <div className="categories-header">
          <h1>Frontend Projects</h1>
        </div>
        {screenWidth > 700 && (
          <div className="frontend-body">
            {frontend.map((cards) => {
              return <FrontEndCards key={cards.id} data={cards} />;
            })}
          </div>
        )}
        {screenWidth <= 700 && (
          <div className="frontend-mobile-body">
            <div className="frontend-body">
              {frontend.slice(0, 1).map((cards) => {
                return <FrontEndCards key={cards.id} data={cards} />;
              })}
            </div>
            <div className="frontend-body">
              {frontend.slice(1, 2).map((cards) => {
                return <FrontEndCards key={cards.id} data={cards} />;
              })}
            </div>
            <div className="frontend-body">
              {frontend.slice(2, 3).map((cards) => {
                return <FrontEndCards key={cards.id} data={cards} />;
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FrontEnd;
