import React, { useEffect, useState } from "react";
import email from "./images/email.svg";
import location from "./images/location.svg";
import phone from "./images/phone.svg";
import axios from "axios";
import "./UserCard.css";

const UserCard = () => {
  const [userList, setUserList] = useState();

  const getData = () => {
    axios.get("https://randomuser.me/api/").then((res) => {
      setUserList(res.data.results);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="user-card">
      {userList?.map((user, index) => (
        <div key={index}>
          <div>
            <img id="profil-photo" src={user.picture.large} alt="" />
            {user.name.first} {user.name.last}
          </div>
          <br />
          <div>
            <img className="icon" src={email} alt="" />
            {user.email}
          </div>
          <br />
          <div>
            <img className="icon" src={phone} alt="" />
            {user.phone}
          </div>
          <br />
          <div>
            <img className="icon" src={location} alt="" />
            {user.location.country} - {user.location.city}
          </div>
          <p id="age">Age: {user.dob.age}</p>
          <p id="register">
            Register Date: {user.registered.date.substring(0, 10)}
          </p>
        </div>
      ))}
      <button id="btn" onClick={getData}>
        Random User
      </button>
    </div>
  );
};

export default UserCard;
