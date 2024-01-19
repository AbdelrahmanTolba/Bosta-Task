import "../../styles/success.css";
import { HiArrowUpRight } from "react-icons/hi2";

import woman from "../../assets/woman.png";
import BluePath from "./BluePath";
import { useTranslation } from "react-i18next";
export default function Success() {
  const { t } = useTranslation();
  return (
    <section className="success">
      <h2 className="section__heading">{t("success.heading")}</h2>
      <BluePath />
      <div className="price">
        <div className="price__path">
          <img src={woman} alt="Woman Photo" className="price__image" />
        </div>
        <div className="price__right">
          <h2 className="section__heading">{t("success.price__heading")}</h2>
          <p className="price__paragraph">{t("success.price__paragraph")}</p>
          <a className="price__btn">
            {t("success.btn")} <HiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
