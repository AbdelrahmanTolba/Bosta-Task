import { useTranslation } from "react-i18next";
import man from "../assets/man.png";
import "../styles/Header.css";
import Polygon from "./Polygon";

function Header() {
  const { t } = useTranslation();
  return (
    <header className="header">
      <div className="header__text">
        <h1 className="header__heading">{t("header.heading")}</h1>
        <p className="header__paragraph">{t("header.paragraph")}</p>
        <button className="header__btn" type="button">
          {t("header.btn")}
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
