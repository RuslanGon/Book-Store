import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
