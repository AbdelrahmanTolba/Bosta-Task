import "../styles/appNav.css";
import { HiChevronDown, HiOutlineSearch } from "react-icons/hi";
import Menu from "./Menu";
import { useState } from "react";
import Logo from "./Logo";

function AppNav() {
  const [isOpen, setIsOpen] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }
  function handleModalClick(e) {
    e.preventDefault();
    setIsOpen((open) => !open);
  }
  return (
    <nav>
      <Logo />
      {/* Start Middle side */}
      <div className="middle__side">
        <ul className="middle-side-options">
          <li className="option">
            <span className="nav__link">Products</span>
            <HiChevronDown size={20} className="arrow" />

            <ul>
              <li>Solution</li>
              <li>Dashboard</li>
              <li>Mobile App</li>
            </ul>
          </li>
          <li className="option">
            <span className="nav__link">Integrations </span>
            <HiChevronDown size={20} className="arrow" />

            <ul>
              <li>Shopify</li>
              <li>WooCommerce</li>
              <li>Custom APIs</li>
            </ul>
          </li>
          <li className="option">
            <span className="nav__link"> Use Cases </span>
            <HiChevronDown size={20} className="arrow" />

            <ul>
              <li>Businesses</li>
              <li>SMEs</li>
            </ul>
          </li>
          <li className="option">
            <span className="nav__link"> Pricing</span>
          </li>
          <li className="option">
            <span className="nav__link">Blog</span>
          </li>
        </ul>
      </div>
      {/* End Middle side */}

      {/* start Right side */}
      <div className="right-side">
        <div className="shipment option">
          <div className="shipment-header">
            <span className="nav__link">Track Shipment</span>
            <HiChevronDown size={20} className="arrow" />
          </div>

          <div className="shipment-body">
            <form onSubmit={handleSubmit}>
              <label>
                <h5 className="heading-5">Track your shipment</h5>
                <div className="input-group">
                  <input type="text" placeholder="Tracking No." />
                  <button className="btn-search">
                    <HiOutlineSearch className="search-icon" />
                  </button>
                </div>
              </label>
            </form>
          </div>
        </div>

        <div className="lng option">
          <a href="" className="nav__link">
            En
          </a>
          <HiChevronDown size={20} className="arrow" />
        </div>
        <a href="" className="signIn nav__link option">
          Sign In
        </a>
        <button className="btn-signUp">Sign Up</button>
      </div>
      {/* End Right side */}

      {/* Mobile */}
      <div className="mobile-right-side">
        <div className="shipment">
          <div className="shipment-header" onClick={handleModalClick}>
            <a className="nav__link">Track Shipment</a>
            <HiChevronDown size={20} className="arrow" />
          </div>
          {isOpen && (
            <div className="shipment-body">
              <form onSubmit={handleSubmit}>
                <label>
                  <h5 className="heading-5">Track your shipment</h5>
                  <div className="input-group">
                    <input type="text" placeholder="Tracking No." />
                    <button className="btn-search">
                      <HiOutlineSearch className="icon-search" />
                    </button>
                  </div>
                </label>
              </form>
            </div>
          )}
        </div>
        <Menu />
      </div>
    </nav>
  );
}

export default AppNav;
