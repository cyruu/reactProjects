import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/productslice";
function Products() {
  const allProducts = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);
  const allCartProducts = useSelector((state) => state.cartProducts);
  const [status, setStatus] = useState("");
  const [tracker, setTracker] = useState(true);
  const dis = useDispatch();
  useEffect(() => {
    if (status == "added") {
      const success = document.getElementById("success");
      success.style.display = "block";
      setTimeout(() => {
        success.style.display = "none";
      }, 750);
    }
    if (status == "alreadyincart") {
      const success = document.getElementById("error");
      success.style.display = "block";
      setTimeout(() => {
        success.style.display = "none";
      }, 750);
    }
  }, [tracker]);
  const handleCart = (id) => {
    return function () {
      setTracker((prev) => !prev);
      // first add to cart
      if (allCartProducts.length == 0) {
        dis(addToCart({ id }));
        setStatus("added");
      } else {
        let eligible = true;
        allCartProducts.map((product) => {
          if (product.id == id) {
            eligible = false;
          }
        });

        if (eligible) {
          dis(addToCart({ id }));
          setStatus("added");
        } else {
          setStatus("alreadyincart");
        }
      }
    };
  };
  if (loading) {
    return (
      <>
        <h1>Products</h1>
        <p>Loading...</p>
      </>
    );
  }
  return (
    <>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        {status == "added" ? <p id="success">Added to Cart</p> : ""}
        {status == "alreadyincart" ? <p id="error">Already in Cart</p> : ""}
        <h1>Products</h1>
      </div>

      <div className="productContainer">
        {allProducts.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.images[0]} height="100" width="100" />
              <p>{product.title}</p>
              <button className="btn" onClick={handleCart(product.id)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
