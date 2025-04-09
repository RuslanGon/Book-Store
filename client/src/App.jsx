import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import Books from "./components/Books.jsx";
import 'normalize.css';
import './App.css'
import Dashboard from "./components/Dashboard.jsx";
import AddStudent from "./components/AddStudent.jsx";
import Register from "./components/Register.jsx";
import AddBook from "./components/AddBook.jsx";
import { useState } from "react";
import LogOut from "./components/LogOut.jsx";

function App() {

const [bar, setBar] = useState('')  

  return (
    <>
    <Navbar bar={bar}/>
    <Routes>
      <Route path="/" element={<Home setBar={setBar} />} />
      <Route path="/login" element={<Login setBar={setBar}/>} />
      <Route path="/books" element={<Books />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addstudent" element={<AddStudent />} />
      <Route path="/register" element={<Register />} />
      <Route path="/addbook" element={<AddBook />} />
      <Route path="/logout" element={<LogOut setBar={setBar} />} />



    </Routes>
    </>
  );
}

export default App;
