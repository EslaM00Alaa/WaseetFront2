import {Routes,Route} from "react-router-dom";
import NavBar from './components/nav/navbar';
import Sidebar from './components/sidebar/sidepar';
import Home from "./pages/home/Home";
import "./App.css"
import Buy from "./pages/buy/buy";
import Sale from "./pages/sale/sale";
import Ask from "./pages/ask/ask";
import Rento from "./pages/rent/rento";
import Rentr from "./pages/rent/renter";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Sidebar className="sid"/>

      <Routes className="cont">
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/rento" element={<Rento />} />
        <Route path="/rentr" element={<Rentr />} />
       <Route path="/ask" element={<Ask />} />
      </Routes>

    </div>
  );
}

export default App;
