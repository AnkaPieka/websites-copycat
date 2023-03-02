import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./App/Components/Footer/Footer";
import NavBar from "./App/Components/NavBar/NavBar";
import Homepage from "./App/Homepage/Homepage";
import UltGuitar from "./App/UltimateGuitar/UltGuitar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<UltGuitar />} path="/ultimate-guitar" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
