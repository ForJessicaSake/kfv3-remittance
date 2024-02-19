import "./App.css";
import Offers from "./components/offers";
import Contact from "./components/contact";
import Content from "./components/content";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <Offers/>
      <Content/>
      <Contact/>
      <Footer/>

    </main>
  );
}

export default App;
