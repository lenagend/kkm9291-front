import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./commons/pages/HomePage";
import LottoPage from "./lotto/pages/LottoPage";
import AboutMePage from "./aboutMe/pages/AboutMePage";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/aboutMe" element={<AboutMePage />} />
              <Route path="/lotto" element={<LottoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
