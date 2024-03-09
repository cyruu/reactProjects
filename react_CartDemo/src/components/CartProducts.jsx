import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CartProducts() {
  const cartProducts = useSelector((state) => state.cartProducts);
  const dis = useDispatch();
  function handleRemove(id) {
    return function () {
      dis(removeFromCart());
    };
  }
  return (
    <div style={{ minHeight: "300px" }}>
      <h1>Cart</h1>
      <div className="productContainer">
        {cartProducts.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.images[0]} height="100px" width="100px" />
              <p>{product.title}</p>
              <button onClick={handleRemove(product.id)} className="btn">
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartProducts;
0;
