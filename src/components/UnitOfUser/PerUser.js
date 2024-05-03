import React from "react";
import "./PerUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo, faPlus } from "@fortawesome/free-solid-svg-icons";
const PerUser = (props) => {
  const { email, first_name, gender, id, img, phone, sallary } = props.user;
  return (
    <div className="peruser">
      <div className="peruser-left-container">
        <img
          style={{ width: "220px", borderRadius: "10px" }}
          src={img}
          alt=""
        />
      </div>
      <div className="peruser-right-container">
        <p>User Name : {first_name}</p>
        <p>User Email : {email}</p>
        <p>User Phone : {phone}</p>
        <p>User Gender : {gender}</p>
        <p>User Sallary Per Year : {sallary}</p>
        <button onClick={() => props.Handler(props.user)}>
          {" "}
          <FontAwesomeIcon icon={faPlus} /> Add Person
        </button>
      </div>
    </div>
  );
};

export default PerUser;
