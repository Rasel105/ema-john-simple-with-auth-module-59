import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import auth from '../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Signup = () => {
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [confirmPassword, setConfirmPassword] = useState('')
     const [error, setError] = useState('')
     const navigate = useNavigate();

     const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

     const handleEmailBlur = event => {
          setEmail(event.target.value)
     }
     const handlePasswordBlur = event => {
          setPassword(event.target.value)
     }
     const handleConfirmPasswordBlur = event => {
          setConfirmPassword(event.target.value)
     }

     if (user) {
          navigate('/shop')
     }

     const handleCreateUser = event => {
          event.preventDefault()
          if (password !== confirmPassword) {
               setError("Your two passwords did not match");
               return
          }
          if (password.length < 6) {
               setError("Password must be 6 caracters or longer");
               return;
          }
          createUserWithEmailAndPassword(email, password)
               .then(result => {
                    console.log("User created")
               })
     }

     return (
          <div className='form-container'>
               <div>
                    <h2 className='form-title'>SignUp</h2>
                    <form onSubmit={handleCreateUser}>
                         <div className="input-group">
                              <label htmlFor="email">Email</label>
                              <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                         </div>
                         <div className='input-group'>
                              <label htmlFor="password">Password</label>
                              <input type="password" onBlur={handlePasswordBlur} name="password" id="" required />
                         </div>
                         <div className='input-group'>
                              <label htmlFor="confirm-password">Confirm Password</label>
                              <input type="password" onBlur={handleConfirmPasswordBlur} name="confirm-password" id="" required />
                              <p style={{ "color": 'red' }}>{error}</p>

                         </div>
                         <input className='form-submit' type="submit" value="SignUp" />
                    </form>
                    <p className='form-link-container'>
                         Already have an account?
                         <Link className='form-link' to='/login'>Login</Link>
                    </p>
                    <div className='or-container'>
                         <div>
                              <hr />
                         </div>
                         <p>or</p>
                         <div>
                              <hr />
                         </div>
                    </div>

                    <button className='google-btn'>
                         <img src="https://staffordonline.org/wp-content/uploads/2019/01/Google.jpg" alt="" />
                         <p>Continue With Google</p>
                    </button>
               </div>
          </div>
     );
};

export default Signup;