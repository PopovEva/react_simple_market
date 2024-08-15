import React, { useEffect, useState } from "react";

const App = () => {
  const product = [
    { id: 1, desc: "milk", price: 5 },
    { id: 2, desc: "bread", price: 8 },
    { id: 3, desc: "watter", price: 3 },
    { id: 4, desc: "chocolate", price: 10 },
  ];
  const [cart, setcart] = useState([]);
  const [total, settotal] = useState(0);

  useEffect(() => {
    // console.log("add");
    // console.table(cart);
    let temp = 0;
    cart.forEach((pro) => (temp += pro.price * pro.amount));
    settotal(temp);
  }, [cart]);

  const addToCart = (pro, deltaAmount) => {
    // console.log(deltaAmount);
    let tempProduct = cart.filter((prod) => prod.id == pro.id)[0];
    if (tempProduct) {
      //if we have in card
      tempProduct.amount += deltaAmount;
      if (tempProduct.amount == 0) {
        setcart([...cart.filter((prod) => prod.id != pro.id)]);
        console.log("remove");
        return;
      }
      setcart([...cart]);
      // console.log("we have");
    } else {
      //  console.log("null");  // if dont have
      // console.log(tempProduct);
      pro.amount = 1;
      setcart([...cart, pro]);
    }
  };
  return (
    <div>
      <h1>Products ({product.length}) </h1>
      {product.map((pro) => (
        <div key={pro.id}>
          Desc: {pro.desc} Price: {pro.price}
          <button onClick={() => addToCart(pro, 1)}>Add to Cart</button>
        </div>
      ))}
      <h1>Cart: ({cart.length}) </h1>
      {cart.map((pro, ind) => (
        <div key={ind}>
          Desc: {pro.desc} Price: {pro.price} Amount: {pro.amount}
          <button onClick={() => addToCart(pro, 1)}>+</button>
          <button onClick={() => addToCart(pro, -1)}>-</button>
        </div>
      ))}
      <h1>Total:</h1>
      Total products: ({cart.length}) Total price: {total}
    </div>
  );
};

export default App;
