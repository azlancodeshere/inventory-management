import { Routes, Route } from "react-router-dom";

import Register from "./pages/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AddProductModal from "./product/AddProductModal.jsx";
import AllProductsPage from "./product/AllProductsPage.jsx";
import CategoriesPage from "./pages/Categories/CategoriesPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      
      <Route path="/create-product" element={<AddProductModal/>}/>
      <Route path="/all-products" element={<AllProductsPage/>}/>
      <Route path="categories" element={<CategoriesPage/>}/>
    </Routes>
  );
}

export default App;