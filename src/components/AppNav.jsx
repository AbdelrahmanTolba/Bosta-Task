import "../styles/appNav.css";
import { HiChevronDown } from "react-icons/hi";
import Menu from "./Menu";
import { useState } from "react";
import Logo from "./Logo";
import SearchTrack from "./SearchTrack";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
function AppNav({ page = "home" }) {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(true);
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  function handleModalClick(e) {
    e.preventDefault();
    setIsOpen((open) => !open);
  }

  function handleSelectChange(e) {
    i18n.changeLanguage(e.target.value);
    setSelectedLang(e.target.value);
  }

  return (
    <nav>
      <Logo />
      {/* Start Middle side */}
      <div className="middle__side">
        <ul className="middle-side-options">
          {page !== "track" && (
            <>
              <li className="option">
                <span className="nav__link">{t("products")}</span>
                <HiChevronDown size={20} className="arrow" />

                <ul>
                  <li>{t("Solution")}</li>
                  <li>{t("dashboard")}</li>
                  <li>{t("MobileApp")}</li>
                </ul>
              </li>
              <li className="option">
                <span className="nav__link">{t("integrations")}</span>
                <HiChevronDown size={20} className="arrow" />

                <ul>
                  <li>{t("Shopify")}</li>
                  <li>{t("WooCommerce")}</li>
                  <li>{t("CustomAPIs")}</li>
                </ul>
              </li>
              <li className="option">
                <span className="nav__link">{t("useCases")} </span>
                <HiChevronDown size={20} className="arrow" />

                <ul>
                  <li>{t("businesses")}</li>
                  <li>{t("SMEs")}</li>
                </ul>
              </li>
            </>
          )}

          <li className="option">
            <span className="nav__link">
              {page === "track" ? t("middleNav.Main") : t("middleNav.blog")}
            </span>
          </li>
          <li className="option">
            <span className="nav__link">{t("middleNav.pricing")}</span>
          </li>
          {page === "track" && (
            <li className="option">
              <span className="nav__link">{t("middleNav.callSales")}</span>
            </li>
          )}
        </ul>
      </div>
      {/* End Middle side */}

      {/* start Right side */}
      <div className="right-side">
        <div className="shipment option">
          <div className="shipment-header">
            <span className="nav__link">{t("trackShipment.header")}</span>
            <HiChevronDown size={20} className="arrow" />
          </div>

          <div className={`shipment-body ${page}`}>
            <SearchTrack />
          </div>
        </div>

        <select
          className="lng nav__link"
          value={selectedLang}
          onChange={handleSelectChange}
        >
          <option value="ar">
            {" "}
            {i18n.language === "en" ? "Arabic" : "اللغة العربية"}
          </option>
          <option value="en">
            {i18n.language === "en" ? "English" : "اللغة الانجليزية"}
          </option>
        </select>

        <a href="" className="signIn nav__link option">
          {t("signin")}
        </a>
        {page !== "track" && (
          <button className="btn-signUp">{t("signup")}</button>
        )}
      </div>
      {/* End Right side */}

      {/* Mobile */}
      <div className="mobile-right-side">
        <div className="shipment">
          <div className="shipment-header option" onClick={handleModalClick}>
            <a className="nav__link">{t("trackShipment.header")}</a>
            <HiChevronDown size={20} className="arrow" />
          </div>
          {isOpen && (
            <div className={`shipment-body ${page}`}>
              <SearchTrack />
            </div>
          )}
        </div>
        <Menu />
      </div>
    </nav>
  );
}

export default AppNav;
