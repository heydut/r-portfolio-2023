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
          <NetlifyForm name="contact" honeypotName="bot-field">
            {({ handleChange, success, error }) => (
              <div className="categories-body-right">
                <Honeypot />
                {success && <p>Thanks for contacting us!</p>}
                {error && (
                  <p>
                    Sorry, we could not reach our servers. Please try again
                    later.
                  </p>
                )}

                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    onChange={handleChange}
                  ></input>
                  <input
                    type="text"
                    placeholder="Your email"
                    name="email"
                    onChange={handleChange}
                  ></input>
                </div>
                <textarea
                  name="message"
                  type="text"
                  placeholder="Write your message here..."
                  className="categories-body-message"
                  onChange={handleChange}
                ></textarea>
                <button type="submit" value="Submit">
                  Submit
                </button>
              </div>
            )}

            {/* ************ */}
          </NetlifyForm>
        </div>
      </div>
    </section>
  );
};

export default Contact;
