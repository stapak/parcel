import HomepageAnimation from "./subcomp/HomepageAnimation";
import Tracker from "./subcomp/Tracker";
import "./Homepage.css";

function Homepage() {
  return (
    <section className="homepage">

      <div className="homepage-left">
        <HomepageAnimation />
      </div>

      <div className="homepage-right">
        <Tracker />
      </div>

    </section>
  );
}

export default Homepage;