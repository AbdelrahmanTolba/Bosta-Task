import { Link } from "react-router-dom";
import "../styles/footer.css";
import Logo from "./Logo";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer__logo">
        <Logo className="logo" />
      </div>

      <div className="lists">
        <div className="item__list">
          <h6 className="item__list--heading">{t("products")}</h6>
          <ul className="footer__items">
            <li className="footer__item">
              <a href="">{t("Solution")}</a>
            </li>
            <li className="footer__item">
              <a href="">{t("dashboard")}</a>
            </li>
            <li className="footer__item">
              <a href="">{t("MobileApp")}</a>
            </li>
          </ul>
        </div>

        <div className="item__list">
          <h6 className="item__list--heading">{t("integrations")}</h6>
          <ul className="footer__items">
            <li className="footer__item">
              <a href="">{t("Shopify")}</a>
            </li>
            <li className="footer__item">
              <a href="#WooCommerce">{t("WooCommerce")}</a>
            </li>
            <li className="footer__item">
              <a href="#Custom APIs">{t("CustomAPIs")}</a>
            </li>
          </ul>
        </div>

        <div className="item__list">
          <h6 className="item__list--heading">{t("useCases")}</h6>
          <ul className="footer__items">
            <li className="footer__item">
              <a href="">{t("SMEs")}</a>
            </li>
            <li className="footer__item">
              <a href="">{t("businesses")}</a>
            </li>
          </ul>
        </div>

        <div className="item__list">
          <h6 className="item__list--heading">{t(`footer.Company`)}</h6>
          <ul className="footer__items">
            <li className="footer__item">
              <a href="">{t(`footer.About_us`)}</a>
            </li>
            <li className="footer__item">
              <a href="">{t(`footer.Careers`)}</a>
            </li>
            <li className="footer__item">
              <a href="">{t(`footer.Pricing`)}</a>
            </li>
            <li className="footer__item">
              <a href="">{t(`footer.FAQ`)}</a>
            </li>
          </ul>
        </div>
      </div>

      <Link to={"/"} className="link__track">
        {t("footer.Track_Shipment")}
      </Link>
    </div>
  );
}
