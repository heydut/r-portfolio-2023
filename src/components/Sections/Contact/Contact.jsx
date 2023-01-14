// Design
import "./Contact.scss";
import memoji from "../../../assets/memoji-star.png";
// Libraries
// Components
//////////////////////////////////////////////////////////////

const Contact = () => {
  return (
    <section id="contact-section">
      <div className="contact">
        <div className="categories-header">
          <h1>Let's Talk</h1>
        </div>
        <div className="categories-body">
          <div className="categories-body-left">
            <i class="fa-brands fa-github" />
            <i class="fa-brands fa-linkedin-in" />
            <i class="fa-solid fa-envelope" />
            <i class="fa-brands fa-whatsapp" />
            <img src={memoji} alt="memoji" />
          </div>
          <form className="categories-body-right">
            <div>
              <input type="text" placeholder="Your name"></input>
              <input type="text" placeholder="Your email"></input>
            </div>
            <input
              type="text"
              placeholder="Write your message here..."
              className="categories-body-message"
            ></input>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
