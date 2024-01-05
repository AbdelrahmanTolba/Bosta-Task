import AppNav from "../components/AppNav";
import Header from "../components/Header";
import Services from "../components/Services";
import Success from "../components/Success";

export default function Home() {
  return (
    <div className="home">
      <AppNav />
      <Header />
      <Services />
      <Success />
    </div>
  );
}
