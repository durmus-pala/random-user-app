import React, {useEffect, useState} from 'react';
import axios from 'axios';

const UserCard = () => {

  const [userList, setUserList] = useState([]);

    useEffect(() => {
        axios.get("https://randomuser.me/api/")
        .then(res => setUserList(res.data));
      },[])
    

    return (
        <div className="user-card">
         {console.log(userList)}
               
            </div> 
    );
}

export default UserCard;