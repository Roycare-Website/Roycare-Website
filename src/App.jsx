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
import Orders from "./pages/Dashboard/Orders";
import Contact from "./pages/Contact";

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


        <Route path="/dashboard" element={ <DashboardLayout/>}>
        < Route index={ true} element={ < Overview/> } />
        < Route path="orders" element={ <Orders/>} />
        

        </Route>

      </Routes>

    </BrowserRouter>


  )
}

export default App
