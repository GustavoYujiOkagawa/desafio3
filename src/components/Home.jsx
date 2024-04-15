import "./home.css";
import backgroundSvg from "../assets/images/background-pattern-desktop.svg";
import Card from "./Card";

function Home() {
  return (
    <main>
      <section className="container">
        <img src={backgroundSvg} alt="background" />
        <Card />
      </section>
    </main>
  );
}

export default Home;
