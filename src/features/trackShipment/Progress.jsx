import { HiCheck } from "react-icons/hi";
import { ORDER_STATUSES_TO_COLORS } from "../../constants/orderStatus";
import { useTranslation } from "react-i18next";
import { titleizeKeys } from "../../utils/titleizeObjKeys";

// eslint-disable-next-line react/prop-types
export default function Progress({ state }) {
  const { t, i18n } = useTranslation();
  const labelArray = [
    "Shipment_has_been_created",
    "Shipment_has_been_received_from_the_merchant",
    "Shipment_is_out_for_delivery",
    "Shipment_Delivered",
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
            <p>{i18n.language === "en" ? titleizeKeys(t(label)) : t(label)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
