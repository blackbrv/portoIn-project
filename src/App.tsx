import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./page/LandingPage";
import TemplatePage from "./page/TemplatePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/template" element={<TemplatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
