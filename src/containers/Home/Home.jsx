import Topbar from "./../../components/Topbar/Topbar";
import Footer from "./../../components/Footer/Footer";
import Weather from './../../components/Weather/Weather';

function Home() {
  return (
    <div>
      <Topbar />
      <Weather/>
      <Footer />
    </div>
  );
}

export default Home;
