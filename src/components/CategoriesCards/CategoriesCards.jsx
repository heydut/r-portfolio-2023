// Design
import "./CategoriesCards.scss";
import example from "../../assets/Glitter.png";
// Libraries
// Components
//////////////////////////////////////////////////////////////

const CategoriesCards = (props) => {
  return (
    <section
      id="categ-cards-section"
      style={{
        backgroundColor: `${props.data.color}`,
      }}
      className={`grid${props.data.id}`}
    >
      <div className="categories-cards-normal">
        <div
          className="categ-cards-gradient"
          style={{
            backgroundImage: `linear-gradient(to top, ${props.data.color}, rgba(0, 0, 0, 0))`,
          }}
        />

        <div className="categ-cards">
          <div className="categ-cards-content">
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>
          </div>
          <div className="categ-cards-background">{props.data.image}</div>
        </div>
      </div>
      <div className="categories-cards-hover"></div>
    </section>
  );
};

export default CategoriesCards;
