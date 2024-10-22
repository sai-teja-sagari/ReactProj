import React, { useState } from 'react'
import axios from 'axios'
import '../styles/AdminSignUp.css'
const AdminSignUp = () => {
  let [email, setEmail]=useState("")
  let [password, setPassword]=useState("")
  let [name,setName]=useState("")
  let [phone,setPhone]=useState("")

  let data={name,password,phone,email}
  function addAdmin(){
    axios.post('http://localhost:1000/Admin',data)
    .then((res)=>{
      console.log(res);
      alert("Admin Create Sucessfull")
      
    })
    .catch((err)=>{
      console.log(err);
      alert("Invalid Data")
      
    })
  }
  return (
    <div className="AdminSignUp">
        <div className="bg_img"></div>
        <form onSubmit={addAdmin} action="">

            <label htmlFor="">Name</label>
            <input type="text" 
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
             placeholder='Enter the Name'
             required />

            <label htmlFor="">Email</label>
            <input type="email" value={email}onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email address' />

            <label htmlFor="">Password</label>
            <input type="password" value={password}onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter your password'/>

            <label htmlFor="">Phone :</label>
            <input pattern='[0-9]{10}' value={phone} 
            onChange={(e)=>{setPhone(e.target.value)}} type="tel" placeholder='Enter the Phone' />

            <button  className='btn btn-primary'>SignUp</button>


        </form>
    </div>

  )
}
export default AdminSignUp;
