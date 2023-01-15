// Design
import "./App.scss";
// Libraries
// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
//////////////////////////////////////////////////////////////

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
