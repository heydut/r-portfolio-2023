// Design
import "./CategoriesCards.scss";
// Libraries
import { useState } from "react";
// Components

//////////////////////////////////////////////////////////////

const CategoriesCards = (props) => {
  return (
    <section id="categ-cards-section" className={`grid${props.data.id} `}>
      <a href={`#section-${props.data.section}`}>
        <div className="categories-cards-normal">
          <div className="categ-cards-gradient" />

          <div className="categ-cards">
            <div className="categ-cards-content">
              <h1>{props.data.title}</h1>
              <p>{props.data.description}</p>
            </div>
            <div className="categ-cards-background">{props.data.image}</div>
          </div>
        </div>
        <div className="categories-cards-hover"></div>
      </a>
    </section>
  );
};

export default CategoriesCards;
