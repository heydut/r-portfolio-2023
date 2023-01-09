// Design
import "./FrontEndCards.scss";
// Libraries
// Components

//////////////////////////////////////////////////////////////

const FrontEndCards = (props) => {
  return (
    <section id="frontend-cards">
      <img src={`${props.data.image}`} alt="frontend-cards" />
      <h1>{props.data.title}</h1>

      <p className="frontend-cards-description">{props.data.description}</p>
      <p className="frontend-cards-more">
        More about <i className="fa-solid fa-caret-right" />
      </p>
      <span>
        <a href={`${props.data.github}`} target="_blank">
          <i className="fa-solid fa-computer" />
          <p>Live Project</p>
        </a>
        <a href={`${props.data.github}`} target="_blank">
          <i className="fa-solid fa-code" />
          <p>Github Link</p>
        </a>
      </span>
    </section>
  );
};

export default FrontEndCards;
