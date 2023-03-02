import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import UltGuitar from "./pages/UltimateGuitar/UltGuitar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<UltGuitar />} path="/ultimate-guitar" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
