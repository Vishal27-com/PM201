import {Routes,Route} from "react-router-dom"
import Product from "../Pages/Product";
import ProductDetail from "../Pages/ProductDetail";
import Cart from "../Pages/Cart";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Product />} />
      <Route path='/:id' element={<ProductDetail />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  );
};

export default AllRoutes;
