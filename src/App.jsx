import About from "./components/About";
import Blog from "./components/Blog";
import Casestudies from "./components/Casestudies";
import DesignAndDevelopment from "./components/DesignAndDevelopment";
import DevelopmentStage from "./components/DevelopmentStage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Logolist from "./components/Logolist";
import Resources from "./components/Resources";
import Services from "./components/Services";
import Techstack from "./components/Techstack";
import Workwithus from "./components/Workwithus";

function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <Services />
        <About />
        <Logolist />
        <Workwithus />
        <Casestudies />
        <Blog />
        <DesignAndDevelopment />
        <Techstack />
        <DevelopmentStage />
        <Resources />
        <Footer />
      </div>
    </>
  );
}

export default App;
