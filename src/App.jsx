import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { useContextGlobal } from "./Components/utils/global.context";
import './index.css'

function App() {
  const { state } = useContextGlobal()

  const appStyle = state.theme ? {
    backgroundImage: 'url(/img/lightBackground.svg)',
    color: 'black',
  } : {
    backgroundImage: 'url(/img/darkBackground.svg)',
    color: 'white'
  }

  return (
    <div className="App" style={appStyle}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/dentista/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
        <Route path='*' element={<h1>Page not found - Error 404</h1>} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;