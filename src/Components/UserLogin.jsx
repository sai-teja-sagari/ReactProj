import { useState } from "react";
import '../styles/AdminLogin.css';
const User = () => {
    let [username,setUsername]=useState("");
    console.log(username);
    let [password,setPassword]=useState("");
    console.log(password);

    function login(){
        if(username=="jspider" && password=="1234"){
            alert("User Logged")
        }else{
            alert("Invalid Username or password")
        }
    }
    
    return ( 
        <div className="user">
            <form action="">
                <label htmlFor="">Username</label>
                <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter user name" required/>
                <label htmlFor="">Password</label>
                <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your password" required/><br></br>
                <button onClick={login}>Login</button>
            </form>
        </div>
     );
}
 
export default User;