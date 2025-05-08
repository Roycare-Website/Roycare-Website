import { BrowserRouter, Route, Routes } from "react-router";
import React from "react";
import './App.css'
import RootLayout from './layouts/RootLayout'
import AllProducts from './pages/AllProducts'
import Landing from './pages/Landing'
import SingleProduct from './pages/SingleProduct'
import About from "./pages/About";

function App() {


  return (
    < BrowserRouter>
      < Routes>
        < Route path="/" element={< RootLayout />} >
          < Route index={true} element={< Landing />} />
          < Route path="allproducts" element={< AllProducts />} />
          < Route path="singleproduct" element={< SingleProduct />} />
          < Route path="about" element={< About />} />
        </Route>


      </Routes>

    </BrowserRouter>


  )
}

export default App
