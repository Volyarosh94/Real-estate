import { BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/navbar/Navbar";
import Developers from "./pages/Developers";
import Footer from "./pages/Footer";
import Join from "./pages/Join";
import Loading from "./pages/Header";
import Partners from "./pages/Partners";
import Properties from "./pages/Properties";
import Subscribe from "./pages/Subscribe";
import { useContext } from "react";
import { ThemeContext } from "./components/functions/Theme";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <NavBar />
        <Loading />
        <Partners />
        <Properties />
        <AboutUs />
        <Developers />
        <Join />
        <Subscribe />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
