import { useEffect } from "react";
import "./App.css";
import Products from "./components/Products";
import { useDispatch } from "react-redux";
import { fetchAllProduct } from "./features/productslice";
import CartProducts from "./components/CartProducts";
function App() {
  const dis = useDispatch();
  useEffect(() => {
    dis(fetchAllProduct());
  }, []);
  return (
    <>
      <Products />
      <CartProducts />
    </>
  );
}

export default App;
