import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LottoPage from "./pages/LottoPage";
import AboutMePage from "./pages/AboutMePage";

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
