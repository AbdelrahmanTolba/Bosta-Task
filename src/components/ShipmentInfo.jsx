/* eslint-disable react/prop-types */
import { ORDER_STATUSES_TO_COLORS } from "../constants/orderStatus";
import { titleizeKeys } from "../utils/titleizeObjKeys";
import ShipmentMain from "../components/ShipmentMain";

import Progress from "./Progress";
import moment from "moment";
import { useTranslation } from "react-i18next";

export default function ShipmentInfo({ trackingData }) {
  const { t, i18n } = useTranslation();
  const {
    CurrentStatus,
    provider,
    TrackingNumber,
    PromisedDate,
    TransitEvents,
  } = trackingData;

  const { state, timestamp } = CurrentStatus;
  return (
    <>
      <div className="shipment__container">
        <div className="shipment__infos">
          <div className="shipment__info">
            <h5>
              {t("Shipment_Num")} {TrackingNumber}
            </h5>
            <h3
              className={`shipment__status text__${ORDER_STATUSES_TO_COLORS[state]}`}
            >
              {i18n.language === "en"
                ? titleizeKeys(t(`${state}`))
                : t(`${state}`)}
            </h3>
          </div>
          <div className="shipment__info">
            <h5>{t("Last_updated")}</h5>
            <h3>
              {t(moment(timestamp).format("dddd, MMMM D YYYY, h:mm a")) ||
                moment(timestamp).format("dddd, MMMM D YYYY, h:mm a")}
            </h3>
          </div>
          <div className="shipment__info">
            <h5>{t("Merchant_name")}</h5>
            <h3>{t(`${provider}`)}</h3>
          </div>

          {PromisedDate && (
            <div className="shipment__info">
              <h5>{t("Delivery_time_within")}</h5>
              <h3>
                {t(moment(PromisedDate).format("D dddd YYYY")) ||
                  moment(PromisedDate).format("D dddd YYYY")}
              </h3>
            </div>
          )}
        </div>
        <div className="shipment__tracking">
          {state && <Progress state={state} />}
        </div>
      </div>
      {TransitEvents && <ShipmentMain TransitEvents={TransitEvents} />}
    </>
  );
}
