// Design
import "./Categories.scss";
// Libraries
import { useState } from "react";

// Components
import categories from "../Data/Categories";
import CategoriesCards from "../CategoriesCards/CategoriesCards";
import FrontEnd from "../Sections/FrontEnd/FrontEnd";
import UIDesign from "../Sections/UIDesign/UIDesign";
import AboutMe from "../Sections/AboutMe/AboutMe";
import Contact from "../Sections/Contact/Contact";
//////////////////////////////////////////////////////////////

const Categories = () => {
  const [clickedCategory, setClickedCategory] = useState(0);
  const [clickedCard, setClickedCard] = useState(false);
  const [cardId, setCardId] = useState();
  const myCardId = (id) => {
    setCardId(id);
    setClickedCategory(id);
  };

  return (
    <section id="categories-section">
      <div className="container">
        <div className="categories">
          <div className="categories-list">
            {categories.map((cards) => {
              return (
                <CategoriesCards
                  data={cards}
                  key={cards.id}
                  myCardId={myCardId}
                  clickedCategory={clickedCategory}
                />
              );
            })}
          </div>

          <AboutMe />
          <FrontEnd />
          <UIDesign />
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default Categories;
