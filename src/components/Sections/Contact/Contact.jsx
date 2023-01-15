// Design
import "./Contact.scss";
import memoji from "../../../assets/memoji-star.png";
// Libraries
import { NetlifyForm, Honeypot } from "react-netlify-forms";
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
            <a href="https://github.com/heydut" target="_blank">
              <i class="fa-brands fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/mayranne/" target="_blank">
              <i class="fa-brands fa-linkedin-in" />
            </a>
            <a
              onClick={() =>
                navigator.clipboard.writeText("mayranne-@hotmail.com")
              }
            >
              <i class="fa-solid fa-envelope" />
            </a>
            <a href="https://wa.me/447746193982" target="_blank">
              <i class="fa-brands fa-whatsapp" />
            </a>
            <img src={memoji} alt="memoji" />
          </div>
          <form name="contact" method="POST" className="categories-body-right">
            <div>
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" placeholder="Your name" name="name"></input>
              <input type="email" placeholder="Your email" name="email"></input>
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
