import { Link } from "react-router-dom";
import "../styles/footer.css";
import Logo from "./Logo";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <Logo className="logo" />
      </div>

      <div className="lists">
        <div className="item__list">
          <h6 className="item__list--heading">Products</h6>
          <ul className="footer__items">
            <li className="footer__item">
              <a href="">Solutions</a>
            </li>
            <li className="footer__item">
              <a href="">Dashboard</a>
            </li>
            <li className="footer__item">
              <a href="">Mobile App</a>
            </li>
          </ul>
        </div>

        <div className="item__list">
          <h6 className="item__list--heading">Integrations</h6>
          <ul className="footer__items">
            <li className="footer__item">
              <a href="">Shopify</a>
            </li>
            <li className="footer__item">
              <a href="#WooCommerce">WooCommerce</a>
            </li>
            <li className="footer__item">
              <a href="#Custom APIs">Custom APIs</a>
            </li>
          </ul>
        </div>

        <div className="item__list">
          <h6 className="item__list--heading">Businesses</h6>
          <ul className="footer__items">
            <li className="footer__item">
              <a href="">Businesses</a>
            </li>
            <li className="footer__item">
              <a href="">Use Cases</a>
            </li>
          </ul>
        </div>

        <div className="item__list">
          <h6 className="item__list--heading">Company</h6>
          <ul className="footer__items">
            <li className="footer__item">
              <a href="">About us</a>
            </li>
            <li className="footer__item">
              <a href="">Careers</a>
            </li>
            <li className="footer__item">
              <a href="">Pricing</a>
            </li>
            <li className="footer__item">
              <a href="">FAQ</a>
            </li>
            <li className="footer__item">
              <a href="">Help Center</a>
            </li>
          </ul>
        </div>
      </div>

      <Link to={"/"} className="link__track">
        Track Shipment
      </Link>
    </div>
  );
}
