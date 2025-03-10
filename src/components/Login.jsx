import React,{useState} from 'react'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom'
function Login(){
    const [role,setrole]=useState('User')
    const [email,setemail]=useState()
    const [password,setpassword]=useState() 
    const navigate=useNavigate()
    const handleLogin=()=>{
     if(password.length<8){
        alert('Password should be atleast 8 characters')
     } 
     if(role==='User'){
        navigate('/User')
     }
     else if(role==='Admin'){
        navigate('/admin')
     }
    }
    const handleRegister=()=>{
        navigate('/Register')
    }
  return(
        <div className='login-container'>
            <div className='login'>
            <form onSubmit={handleLogin}>
                <label id="llabel">Role</label>
                <select  id="linput" value={role} onChange={(e)=>setrole(e.target.value)}>
                    <option value="User" >User</option>
                    <option value="Admin">Admin</option>
                </select>
                <label id='llabel'>Email</label>
                <input type="email" id="linput" required value={email} onChange={(e)=>setemail(e.target.value)}/>
                <label id="llabel">Paasword</label>
                <input type="password" id="linput" value={password} onChange={(e)=>setpassword(e.target.value)} required/>
                <button className='lbutton' type='submit'>Login</button>
                <p className='link'>Forgot password?</p>
                <p className='link' onClick={handleRegister}>New user? Register</p>
            </form></div>
        </div>
    );
}
export default Login;