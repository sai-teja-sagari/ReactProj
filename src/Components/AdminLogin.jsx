import { useEffect, useState } from "react";
import '../styles/AdminLogin.css';
import {Link} from 'react-router-dom'
const Admin = () => {

    let [username,setUsername]=useState("");
    console.log(username);
    let [password,setPassword]=useState("");
    console.log(password);
    let [admin,setAdmin]=useState([])
    useEffect(()=>{
        async function fetchAdmin() {
            let data=await fetch('http://localhost:1000/Admin')
            let res=await data.json();
            setAdmin(res);
        }
        fetchAdmin()
    },[])
    // function login(){
    //     if(username=="jspider" && password=="1234"){
    //         alert("Admin Logged")
    //     }
    //     else{
    //         alert("Invalid Username or password")
    //     }
    // }
    function login(e) {
        e.preventDefault();  // Prevent form submission and page refresh

        // Extract emails and passwords into separate arrays
        const emails = admin.map(user => user.email);
        const passwords = admin.map(user => user.password);

        // Check if username and password are valid using includes()
        if (emails.includes(username) && passwords.includes(password)) {
            const matchedAdmin = admin.find(user => user.email === username && user.password === password);
            alert(`Admin Logged in as ${matchedAdmin.name}`);
        } else {
            alert("Invalid Username or Password");
        }
    }
    
    return ( 
        <div className="admin">
            <form action="">
                <label htmlFor="">Username</label>
                <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter user name" required/>
                <label htmlFor="">Password</label>
                <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your password" required/><br></br>
                <button onClick={login}>Login</button>
                <span>Click here to <Link to="/adminsignup">Sign Up</Link></span>
            </form>
        </div>
     );
}
 
export default Admin;