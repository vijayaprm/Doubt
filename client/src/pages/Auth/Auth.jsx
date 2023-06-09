import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './Auth.css' 
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import {signup,login} from '../../actions/auth'


const Auth = () => {
  const [isSignup   ,setIsSignup] = useState(false)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const dispatch =useDispatch()
  const navigate =useNavigate()
  
  const handleSwitch =() => {
     setIsSignup(!isSignup)
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    if(!email && !password){
      alert('Enter email and password')
    }
    if(isSignup)
    {
      if(!name){
        alert("Enter a name to continue")
      }
      dispatch(signup({name,email,password}),navigate)
    }else{
      dispatch(login({email,password}),navigate)
      }
    
    
    console.log({name ,email, password})
  }
  return (
    <section className='auth-section'>
      { isSignup && <AboutAuth />}
      <div className='auth-container-2'>
            {!isSignup && <img src={icon} alt='doubt' className='login-logo'></img>}
            <form onSubmit={handleSubmit}>
              {
                isSignup && (
                    <label htmlFor="name">
                      <h4>Display Name</h4>
                       <input type="text" name='name' id='name' onChange={(e)=>{setName(e.target.value)}}/>
                    </label>
                    
                )
              }
              <label htmlFor="email">
                <h4>Email</h4>
                <input type="email" name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
              </label>
              <label htmlFor="password">
                <div>
                <h4>Password</h4>
                <input type="password" name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
                { !isSignup && <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  forgot password?
                </p>}
                </div>
                
                { isSignup && <p style={{ color:"#666767",fontSize:"13px"}}>Passwords must contian atleast 8 characters<br/> including 1 letter,1 number and 1 symbol</p>                }
              </label>
              {
                isSignup && (
                  <label htmlFor='check'>
                      <input type="checkbox" id='check'/>
                      <p style={{fontSize:"13px"}}>Agreeing to all conditions </p>
                  </label>
                )
              }
              <button type='submit' className='auth-btn'>{isSignup ? 'Sign up' : 'Log In'}</button>
               {
                isSignup && (
                  <p style={{ color:"#666767",fontSize:"13px"}}>
                    By Clicking "Sign up",you agree to our 
                    <span style={{ color:"#007ac6"}}>Terms and Conditions</span>,<br/>
                    <span style={{ color:"#007ac6"}}>Privacy policy</span> and 
                    <span style={{ color:"#007ac6"}}>Cookie policy</span>
                  </p>
                )
               }
            </form>
            <p>
              {isSignup ? 'Already Have an Acoount?' : "Don't Have an Account?"}
              <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" : 'Sign up'}</button>
            </p>
      </div>
    </section>
  )
}

export default Auth