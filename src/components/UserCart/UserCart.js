import React from "react";

const UserCart = (props) => {
  const userCart = props.cart;
  let count = 0;
  let sallary = 0;
  for (let i = 0; i < userCart.length; i++) {
    const user = userCart[i];
    count++;
    sallary += user.sallary;
  }
  console.log(count);
  return (
    <div>
      <p>Total Received User : {count}</p>
      <p>Total Received Sallary : {sallary}</p>
    </div>
  );
};

export default UserCart;
