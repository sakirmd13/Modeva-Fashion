import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Banner from "../components/Banner";
import Products from "../components/Products";
import Sale from "../components/Sale";
import NewArrival from "../components/NewArival";
import ProductCart from "../pages/ProductCart";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import About from "../components/About";
import ProductDetails from "../components/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Banner /> },
      { path: "products", element: <Products /> },
      { path: "sale", element: <Sale /> },
      { path: "new-arrival", element: <NewArrival /> },
      { path: "about", element: <About /> },
      { path: "signup", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
      { path: "cart", element: <ProductCart /> },
      { path: "products/:id", element: <ProductDetails /> },
    ],
  },
]);

export default router;
