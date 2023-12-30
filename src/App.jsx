import "./App.css";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import CarouselFrame from "./components/MiddleFrame/MiddleFrame";
import Rating from "./components/Rating/Rating";
import Recomendations from "./components/Recomendations/Recomendations";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Recomendations />
      <CarouselFrame/>
      <Events/>
      <Services/>
      <Rating/>
      <Footer/>
    </>
  );
}

export default App;
