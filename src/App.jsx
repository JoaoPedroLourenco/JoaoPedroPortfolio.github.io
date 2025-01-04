import "./App.css";
import About from "./components/AboutMe/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Projetos from "./components/Projetos/Projetos";
import Tecnologias from "./components/Tecnologias/Tecnologias";

function App() {
  return (
    <>
      <div className=" h-auto bg-gray-900 p-0 md:px-5 flex items-center flex-col m-auto font-serif overflow-hidden px-4 scroll-smooth">
        <Header />
        <Introduction />
        <About />
        <Tecnologias />
        <Projetos />
        <Footer />
      </div>
    </>
  );
}

export default App;
