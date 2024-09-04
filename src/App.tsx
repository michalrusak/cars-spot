import "./App.css";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <MainSection />
      <Gallery />
      <Articles />
      <Footer />
    </>
  );
}

export default App;

