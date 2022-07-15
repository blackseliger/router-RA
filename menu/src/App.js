import { BrowserRouter, Route, Routes } from "react-router-dom";
import DriftPage from "./components/DriftPage";
import ForzaPage from "./components/ForzaPage";
import HomePage from "./components/HomePage";
import Page from "./components/Page";
import TimeAttackPage from "./components/TimeAttackPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route index element={<HomePage />} />
          <Route path="drift" element={<DriftPage />}/>
          <Route path="timeattack" element={<TimeAttackPage />}/>
          <Route path="forza" element={<ForzaPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


