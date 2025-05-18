import { BrowserRouter, Route, Routes } from "react-router";
import React from "react";
import './App.css'
import RootLayout from './layouts/RootLayout'
import Shop from './pages/Shop'
import Landing from './pages/Landing'
import SingleProduct from './pages/SingleProduct'
import About from "./pages/About";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/Dashboard/Overview";
import AddProduct from "./pages/Dashboard/AddProduct";
import Products from "./pages/Dashboard/Products";
import Orders from "./pages/Dashboard/Orders";
import Contact from "./pages/Contact";
import UpdateProduct from "./pages/Dashboard/UppdateProduct";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

function App() {


  return (
    < BrowserRouter>
      < Routes>
        < Route path="/" element={< RootLayout />} >
          < Route index={true} element={< Landing />} />
          < Route path="shop" element={< Shop />} />
          < Route path="singleproduct" element={< SingleProduct />} />
          < Route path="about" element={< About />} />
          < Route path="contact" element={< Contact />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={ <DashboardLayout/>}>
        < Route index={ true} element={ < Overview/> } />
        < Route path="orders" element={ <Orders/>} />
        < Route path="addproduct" element={ < AddProduct/>} />
        < Route path="orders" element={ <Orders/>} />
        < Route path="products" element={ < Products/>} />
        < Route path="updateproduct" element={ < UpdateProduct/>} />
        

        </Route>

      </Routes>

    </BrowserRouter>


  )
}

export default App
