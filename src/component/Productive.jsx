import { FaQuoteLeft } from "react-icons/fa";
import arrow from "../assets/icon-arrow.svg";
import illustrate2 from "../assets/illustration-2.svg";
import testimonial from "../assets/avatar-testimonial.jpg"

export default function Productive() {
  return (
    <section>
      <div className="productive">
        <div className="image">
          <img src={illustrate2} alt="illustration-2" />
        </div>
        <div className="content">
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files, Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            securely share files and folders with friends, family and colleagues
            for live collaboration. no mail attachments required!
          </p>
          <p className="green">
            <a href="#">See how Fylo works</a>
            <img src={arrow} alt="icon" />
          </p>
          <div className="quote">
            <FaQuoteLeft />
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="card">
              <div className="card-image">
                <img src={testimonial} alt="avatar" />
              </div>
              <div className="card-detail">
                <h5>Kyle Burton</h5>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
