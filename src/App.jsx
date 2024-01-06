import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Error from "./components/Error";
import Home from "./pages/Home";
import TrackingShipment from "./pages/TrackingShipment";
import { useTranslation } from "react-i18next";
function App() {
  const { i18n } = useTranslation();

  return (
    <div className="app" dir={i18n.language === "en" ? "ltr" : "rtl"}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} errorElement={<Error />} />
          <Route
            path="/tracking-shipments/:trackId"
            element={<TrackingShipment />}
            errorElement={<Error />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
