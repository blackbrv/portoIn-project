import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./page/LandingPage";
import TemplatePage from "./page/TemplatePage";
import { BentoGrid } from "./components/templates/Template01";
import { ScrollPortfolio } from "./components/templates/Template02";
import { InteractivePortfolio } from "./components/templates/Template03";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/template" element={<TemplatePage />} />
        <Route path="/template-01" element={<BentoGrid />} />
        <Route path="/template-02" element={<ScrollPortfolio />} />
        <Route path="/template-03" element={<InteractivePortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
