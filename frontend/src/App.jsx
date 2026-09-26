import { Routes, Route, Navigate } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

import Register from "./pages/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AddProductModal from "./product/AddProductModal.jsx";
import AllProductsPage from "./product/AllProductsPage.jsx";
import CategoriesPage from "./pages/Categories/CategoriesPage.jsx";
import SettingPage from "./pages/Settings/SettingPage.jsx";
import Report from "./pages/Reports/Report.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      
      <Route path="/create-product" element={<AddProductModal/>}/>
      <Route path="/all-products" element={<AllProductsPage/>}/>
      <Route path="categories" element={<CategoriesPage/>}/>
      <Route path="/settings" element={<SettingPage/>}/>
      <Route path="/reports" element={<Report/>}/>

    </Routes>
  );
}

export default App;  