import './styles/global.scss'
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/home'
import Login from './pages/login/Login';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import Users from './pages/users/Users';
import User from './pages/user/User';
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ]
    },
    {
      path: "/login",
      element:<Login />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
