import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../../assets/commonData";
import axios from "axios";

export default function AllUsersList(){

    const token = localStorage.getItem("userToken");
    const [ users, setUsers ] = useState([]);

    useEffect(()=>{
        async function getUsers() {
            try{
                console.log("token is",token);
                const response = await axios.get(
                  `${BACKEND_URL}/user/get-all-users`,
                  {
                    headers:{
                      Authorization : `Bearer ${token}`
                    }
                  }

                )

                console.log("response data is:",response.data.users);
                setUsers(response.data.users);
            }catch(error){
                console.error("error is:",error);
            }
        }
        getUsers()
    },[])

    return(
        <div className="shipment-section">

            <h2>Users in  Database</h2>

            <div className="shipment-grid">

              {users.map((user , index) => (
                    <div className="shipment-card" key={index}>
                        <p>User Id:<span> {user._id}</span></p>
                        <p>User Name:<span> {user.name}</span></p>
                        <p>Email Address:<span> {user.email}</span></p>
                        <p>hub:<span> {user.hub}</span></p>
                        <p>Category :<span> {user.userCategory}</span></p>
                    </div>
              ))}

            </div>

      </div>
    )}