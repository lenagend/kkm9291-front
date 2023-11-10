import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Lotto from "./pages/Lotto";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/lotto" element={<Lotto />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
