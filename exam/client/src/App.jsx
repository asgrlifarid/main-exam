import {  Routes, Route } from "react-router-dom";
import './App.css'
import ClientLayout from "./layouts/ClientLayout";
import Home from "./pages/Client/Home";
import ClientProducts from "./pages/Client/ClientProducts";
import AdminLayout from "./layouts/AdminLayout";
import AdminProducts from "./pages/Admin/AdminProducts";

import Wishlist from "./pages/Client/Favorites";
import { AddProduct } from "./pages/Admin/AddProduct";
import Detail from "./pages/Client/ProductDetail";
import NotFound from "./components/NotFound";

function App() {


  return (
    <>
     <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/products" element={<ClientProducts />} />
          <Route path="/wishlist" element={<Wishlist />} />
          
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminProducts />} />
          <Route path="/admin/addproducts" element={<AddProduct />} />
        
        </Route>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </>
  )
}

export default App
