import About from "./components/About";
import Casestudies from "./components/Casestudies";
import Header from "./components/Header";
import Home from "./components/Home";
import Logolist from "./components/Logolist";
import Services from "./components/services";
// import Xyz from "./components/xyz";

function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <Services />
        {/* <Xyz /> */}
        <About />
        <Logolist />
        <Casestudies />
      </div>
    </>
  );
}

export default App;
