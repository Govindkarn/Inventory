import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Button}  from "../src/components/ui/button"
import './App.css'
import Navbar from "./components/ui/Navbar"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import LogOut from "./Pages/LogOut"
import Product from "./components/Product"



function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Product/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<LogOut/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
