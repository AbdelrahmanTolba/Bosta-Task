import { HiArrowUpRight } from "react-icons/hi2";

export default function PartnerInfo() {
  return (
    <div className="partner__info">
      <h2 className="partner__heading">Egypt’s #1 Shipping Partner For:</h2>
      <div className="partner__businesses">
        <div className="partner__business">
          <svg
            viewBox="0 0 30 36"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            className="partner__business--icon"
          >
            <circle
              opacity="0.5"
              cx="15.4737"
              cy="8.73684"
              r="6.73684"
              stroke="#0098A5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "#fff" }}
            />
            <path
              d="M15.4737 20.5263C9.40411 20.5263 4.2719 24.5397 2.58601 30.0574C1.94048 32.1701 3.79086 34 6 34H24.9474C27.1565 34 29.0069 32.1701 28.3614 30.0574C26.6755 24.5397 21.5433 20.5263 15.4737 20.5263Z"
              stroke="#E30613"
              strokeWidth="3"
              style={{ color: "#fff" }}
            />
          </svg>
          <h4 className="partner__business--heading">Business</h4>
          <p className="partner__business--paragraph">
            Bosta can equip your logistic operations with efficient tools and
            innovative tech solutions — dashboard, plugins, and API
            integrations.
          </p>
          <a className="bussniess__btn">
            Start with Bosta <HiArrowUpRight />
          </a>
        </div>
        <div className="partner__business">
          <svg
            viewBox="0 0 36 36"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            className="partner__business--icon"
          >
            <path
              d="M18 24V26"
              stroke="#E30613"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "#0098A5" }}
            />
            <path
              opacity="0.5"
              d="M2 21L13 22C13 22 14.5 19 18 19C21.5 19 23 22 23 22L34 21"
              stroke="#0098A5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "#0098A5" }}
            />
            <path
              d="M2 12C2 9.79086 3.79086 8 6 8H30C32.2091 8 34 9.79086 34 12V30C34 32.2091 32.2091 34 30 34H6C3.79086 34 2 32.2091 2 30V12Z"
              stroke="#E30613"
              strokeWidth="3"
              style={{ color: "#fff" }}
            />
            <path
              d="M25 8V6C25 3.79086 23.2091 2 21 2H15C12.7909 2 11 3.79086 11 6V8"
              stroke="#E30613"
              strokeWidth="3"
              style={{ color: "#fff" }}
            />
          </svg>
          <h4 className="partner__business--heading">
            Small & Medium Business
          </h4>
          <p className="partner__business--paragraph">
            We ensure seamless delivery operations for your small or mid-sized
            hustle with our super-smooth mobile app.
          </p>
          <a className="bussniess__btn">
            Start with Bosta <HiArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
}
