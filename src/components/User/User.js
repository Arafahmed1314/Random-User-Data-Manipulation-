import React, { useState } from "react";
import fakeData from "../Data/Data.json";
import PerUser from "../UnitOfUser/PerUser";
import "./User.css";
import UserCart from "../UserCart/UserCart";
const User = () => {
  const [user, setUser] = useState(fakeData);

  function Handler(user) {
    const newCart = [...userCart, user];
    setUserCart(newCart);
  }
  const [userCart, setUserCart] = useState([]);
  return (
    <div className="container">
      <h1>User Information</h1>
      <div className="inner-container">
        <div className="left-container">
          {user.map((user) => (
            <PerUser Handler={Handler} user={user} key={user.id}></PerUser>
          ))}
        </div>
        <div className="right-container">
          <h1 style={{ paddingBottom: "10px" }}>User Info</h1>
          <UserCart cart={userCart}></UserCart>
        </div>
      </div>
    </div>
  );
};

export default User;
