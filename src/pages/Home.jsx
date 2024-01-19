import AppNav from "../components/AppNav";
import Footer from "../components/Footer";
import Header from "../features/home/Header";
import Partner from "../features/home/Partner";
import Services from "../features/home/Services";
import Success from "../features/home/Success";

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
