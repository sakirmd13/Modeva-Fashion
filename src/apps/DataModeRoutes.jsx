import { Routes, Route } from "react-router-dom";
import Banner from "../components/Banner";
import RootLayout from "../layouts/RootLayout";
import Products from "../components/Products";
import ProductCart from "../pages/ProductCart";


import ProductDetails from "../components/ProductDetails";

// ✅ Import SignUp and SignIn pages
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const DataModeRoutes = () => {
  return (
    <Routes>
      {/* Layout Route */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Banner />} /> {/* Home / default page */}
        <Route path="Banner" element={<Banner />} />
        <Route path="Products" element={<Products />} />
        <Route path="ProductCart" element={<ProductCart />} />
        {/* ✅ SignUp / SignIn Routes */}
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />

        {/* ✅ Dynamic ProductDetails route */}
        <Route path="product/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default DataModeRoutes;
