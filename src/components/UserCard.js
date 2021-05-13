import React, { useEffect, useState } from "react";
import email from "./images/email.svg";
import location from "./images/location.svg";
import phone from "./images/phone.svg";
import axios from "axios";

const UserCard = () => {
  const [userList, setUserList] = useState();

  const getData = () => {
    axios.get("https://randomuser.me/api/").then((res) => {
      console.log(res.data.results);
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
            <img src={user.picture.large} alt="" />
            {user.name.first} {user.name.last}
          </div>
          <div>
            <img src={email} alt="" />
            {user.email}
          </div>
          <div>
            <img src={phone} alt="" />
            {user.phone}
          </div>
          <div>
            <img src={location} alt="" />
            {user.location.country} - {user.location.city}
          </div>
          <p>Age: {user.dob.age}</p>
          <p>Register Date: {user.registered.date}</p>
        </div>
      ))}
      <button onClick={getData}>Random User</button>
    </div>
  );
};

export default UserCard;
