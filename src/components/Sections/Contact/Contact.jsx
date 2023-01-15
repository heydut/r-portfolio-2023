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
          <form name="contact" method="POST" data-netlify="true">
            <div className="categories-body-right">
              <div>
                <input type="text" placeholder="Your name" name="name"></input>
                <input
                  type="text"
                  placeholder="Your email"
                  name="email"
                ></input>
              </div>
              <textarea
                name="message"
                type="text"
                placeholder="Write your message here..."
                className="categories-body-message"
              ></textarea>
              <button type="submit" value="Submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
