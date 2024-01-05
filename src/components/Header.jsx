import man from "../assets/man.png";
import "../styles/Header.css";
import Polygon from "./Polygon";

function Header() {
  return (
    <header className="header">
      <div className="header__text">
        <h1 className="header__heading">Join A New Generation Of Logistics!</h1>
        <p className="header__paragraph">
          Redefining how you ship, track, collect, deliver all through
          innovative tech-solutions and efficient operations.
        </p>
        <button className="header__btn" type="button">
          Start now
        </button>
      </div>

      <div className="wrap__images">
        <div className="header__img">
          <img src={man} alt="manImg" className="man__photo" />
        </div>
        <div className="tracks__form">
          <Polygon />
        </div>
      </div>
    </header>
  );
}

export default Header;
