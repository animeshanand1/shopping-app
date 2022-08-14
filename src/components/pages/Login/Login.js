import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'


function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const signIn=(e)=>{
        e.preventDefault()

    }
  return (
    <div className='login'>
        <Link to='/'>
        <img className='login-logo' src='https://thumbs.dreamstime.com/b/amazon-155631949.jpg' alt='logo'/>
        </Link>
        <div className='login-container'>
            <h1>Sign In</h1>
            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn} className='login-signIn'>sign In</button>
            </form>
            <p>By using the Amazon Services, you agree to be bound by the terms of this Agreement.</p>
        </div>
        <p>New to Amazon ?</p>
        {/* <Link to='/register'>
            <button className='login-register'>Create your Amazon Account</button>
        </Link> */}
    </div>
  )
}

export default Login