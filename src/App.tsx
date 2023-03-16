import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ListLaunches from "./components/ListLaunches/ListLaunches";
import NavButton from "./components/NavButton/NavButton";
import LaunchCountdown from "./components/LaunchCountdown/LaunchCountdown";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <NavButton />
        <Routes>
          <Route path="/launchCountdown" element={<LaunchCountdown />} />
          <Route path="/launches" element={<ListLaunches />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
