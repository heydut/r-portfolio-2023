// Design
import "./Categories.scss";
// Libraries
// Components
import CategoriesCards from "../CategoriesCards/CategoriesCards";
import categories from "../Data/Categories";
//////////////////////////////////////////////////////////////

const Categories = () => {
  return (
    <section id="categories-section">
      <div className="container">
        <div className="categories">
          {/* <div className="categories-header">
            <h1>Oie</h1>
          </div> */}
          <div className="categories-list">
            {categories.map((cards) => {
              return <CategoriesCards data={cards} key={cards.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
