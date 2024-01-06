import { HiCheck } from "react-icons/hi";
import { ORDER_STATUSES_TO_COLORS } from "../constants/orderStatus";

// eslint-disable-next-line react/prop-types
export default function Progress({ state }) {
  const labelArray = [
    "تم انشاء الشحنة",
    "تم استلام الشحنة من التاجر",
    "الشحنة خرجت للتسليم",
    "تم التسليم",
  ];
  return (
    <div className="ShipmentSteper">
      <div className="stepWrapper">
        {labelArray.map((label) => (
          <div className="stepBlock" key={label}>
            <div className="circleWrapper">
              <div className={`circle bg__${ORDER_STATUSES_TO_COLORS[state]}`}>
                <HiCheck size={20} />
              </div>
              <div
                className={`circleWrapper__after bg__${ORDER_STATUSES_TO_COLORS[state]}`}
              ></div>
            </div>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
