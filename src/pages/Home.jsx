import AppNav from "../components/AppNav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Partner from "../components/Partner";
import Services from "../components/Services";
import Success from "../components/Success";

export default function Home() {
  return (
    <div className="home">
      <AppNav />
      <Header />
      <Services />
      <Success />
      <Partner />
      <Footer />
    </div>
  );
}
