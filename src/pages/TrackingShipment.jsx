import "../styles/trackShipment.css";

import { useEffect, useState } from "react";
import { fetchTrackingData } from "../api/apiTrackShipment";
import { useParams } from "react-router-dom";

import Error from "../components/Error";
import AppNav from "../components/AppNav";
import ShipmentInfo from "../components/ShipmentInfo";
import Loading from "../components/Loading";

function TrackingShipment() {
  const [trackingData, setTrackingData] = useState(null);
  const { trackId } = useParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrackingData(trackId);
        setTrackingData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [trackId]);
  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    trackingData && (
      <div className="track">
        <AppNav page="track" />
        <ShipmentInfo trackingData={trackingData} />
      </div>
    )
  );
}
export default TrackingShipment;
