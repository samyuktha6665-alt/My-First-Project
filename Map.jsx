import { createBrowserRouter } from "react-router-dom";
import Login from "../Project1/Components/NavBarComp/Pages/Auth/Login";
import Register from "../Project1/Components/NavBarComp/Pages/Auth/Register";
import Layout from "../Project1/Components/NavBarComp/Pages/Layout";
import Home from "../Project1/Components/HomeContainer/Home";
import ProductDetails from "../Project1/Components/HomeContainer/ProductDetails";
import Footer from "../Project1/Components/Footer/Footer";
import Cart from "../Project1/Components/Cart/Cart";

export let Mymap = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'Login',
        element: <Login />
      },
      {
        path: 'Register',
        element: <Register />
      },
      {
        path: "/ProductDetails/:id",
        element: <ProductDetails />
      },
      {
        path: 'footer',
        element: <Footer />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
]);