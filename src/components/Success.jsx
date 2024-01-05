import "../styles/success.css";
import { HiArrowUpRight } from "react-icons/hi2";

import woman from "../assets/woman.png";
import BluePath from "./BluePath";
export default function Success() {
  return (
    <section className="success">
      <h2 className="success__heading">
        Get to know our success but in numbers
      </h2>
      <BluePath />
      <div className="price">
        <div className="price__path">
          <img src={woman} alt="Woman Photo" className="price__image" />
        </div>
        <div className="price__right">
          <h2 className="price__heading">Flexible prices for everyone</h2>
          <p className="price__paragraph">
            We customize your pricing plan based on your needs. Tailor your own
            with our sales team and we guarantee a sky-rocketing shipping
            experience and sales rates.
          </p>
          <a className="price__btn">
            Learn more <HiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
