import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import Books from "./components/Books.jsx";
import 'normalize.css';
import './App.css'
import Dashboard from "./components/Dashboard.jsx";
import AddStudent from "./components/AddStudent.jsx";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/books" element={<Books />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addstudent" element={<AddStudent />} />


    </Routes>
    </>
  );
}

export default App;
