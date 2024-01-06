/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import problemImg from "../assets/problem.png";
import { titleizeKeys } from "../utils/titleizeObjKeys";
import moment from "moment";

export default function ShipmentMain({ TransitEvents }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="shipment__mains">
      <div className="shipment__main shipment__details">
        <h6>{t("Shipmentdetails")}</h6>
        <table className="table">
          <thead>
            <tr>
              <td>{t("table.Branch")}</td>
              <td>{t("table.Date")}</td>
              <td>{t("table.Time")}</td>
              <td>{t("table.Details")}</td>
            </tr>
          </thead>
          <tbody>
            {TransitEvents?.map(({ hub, state, timestamp }) => (
              <tr key={timestamp}>
                <td>{hub || "--"}</td>
                <td>{moment(timestamp).format("D/MM/YYYY")}</td>
                <td>{moment(timestamp).format("h:mm A")}</td>
                <td>
                  {i18n === "en" ? titleizeKeys(t(`${state}`)) : t(`${state}`)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="shipment__main shipment__address">
        <h6>{t("Deliveryaddress")}</h6>
        <div className="address">
          <p className="address__text">
            امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22 Cairo
          </p>
        </div>
        <div className="problem">
          <div className="problem__side">
            <img
              src={problemImg}
              alt="Problem Photo"
              className="problem__img"
            />
          </div>
          <div className="problem__side">
            <p className="problem__text">{t("isProblem")}</p>
            <button className="problem__btn">{t("ReportProblem")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
