import Hamburger from "hamburger-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiChevronDown } from "react-icons/hi";

export default function Menu() {
  const { t, i18n } = useTranslation();

  const [isOpen, setOpen] = useState(false);

  function handleLang() {
    if (i18n.language === "ar") i18n.changeLanguage("en");
    else i18n.changeLanguage("ar");
  }
  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} className="hamburger__nav" />
      {isOpen && (
        <div className="menu">
          <ul className="menu__options">
            <li className="menu__option option">
              <span className="nav__link">{t("products")}</span>
              <HiChevronDown size={20} className="arrow" />
              <ul>
                <li>{t("Solution")}</li>
                <li>{t("dashboard")}</li>
                <li>{t("MobileApp")}</li>
              </ul>
            </li>
            <li className="menu__option option">
              <span className="nav__link">{t("integrations")}</span>
              <HiChevronDown size={20} className="arrow" />
              <ul>
                <li>{t("Shopify")}</li>
                <li>{t("WooCommerce")}</li>
                <li>{t("CustomAPIs")}</li>
              </ul>{" "}
            </li>
            <li className="menu__option option">
              <span className="nav__link">{t("useCases")}</span>
              <HiChevronDown size={20} className="arrow" />

              <ul>
                <li>{t("businesses")}</li>
                <li>{t("SMEs")}</li>
              </ul>
            </li>
            <li className="menu__option option">
              <span className="nav__link"> {t("middleNav.pricing")}</span>
            </li>
            <li className="menu__option option">
              <span href="" className="nav__link">
                {t("middleNav.blog")}
              </span>
            </li>
            <li className="menu__option option" onClick={handleLang}>
              {i18n.language === "ar" && (
                <span href="" className="nav__link">
                  العربية
                </span>
              )}
              {i18n.language === "en" && (
                <span href="" className="nav__link">
                  Engilsh
                </span>
              )}
            </li>
          </ul>

          <a className="btn nav__link signIn">{t("signin")}</a>
          <button className="btn btn-signUp">{t("signup")}</button>
        </div>
      )}
    </div>
  );
}
