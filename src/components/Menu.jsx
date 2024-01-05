import Hamburger from "hamburger-react";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function Menu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} className="hamburger__nav" />
      {isOpen && (
        <div className="menu">
          <ul className="menu__options">
            <li className="menu__option option">
              <span className="nav__link">Products</span>
              <HiChevronDown size={20} className="arrow" />
              <ul>
                <li>Solution</li>
                <li>Dashboard</li>
                <li>Mobile App</li>
              </ul>
            </li>
            <li className="menu__option option">
              <span className="nav__link"> Integrations</span>
              <HiChevronDown size={20} className="arrow" />
              <ul>
                <li>Shopify</li>
                <li>WooCommerce</li>
                <li>Custom APIs</li>
              </ul>
            </li>
            <li className="menu__option option">
              <span className="nav__link">Use Cases</span>
              <HiChevronDown size={20} className="arrow" />

              <ul>
                <li>Businesses</li>
                <li>SMEs</li>
              </ul>
            </li>
            <li className="menu__option option">
              <span className="nav__link"> Pricing</span>
            </li>
            <li className="menu__option option">
              <span href="" className="nav__link">
                Blog
              </span>
            </li>
            <li className="menu__option option">
              <span href="" className="nav__link">
                العربية
              </span>
            </li>
          </ul>

          <a className="btn nav__link signIn">Sign In</a>
          <button className="btn btn-signUp">Sign Up</button>
        </div>
      )}
    </div>
  );
}
