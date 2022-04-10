import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init'
import './Login.css'

const Login = () => {
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [
          signInWithEmailAndPassword,
          user,
          loading,
          error,
     ] = useSignInWithEmailAndPassword(auth);

     const navigate = useNavigate()

     const location = useLocation()
     const from = location.state?.from?.pathname || '/';

     const handleEmailBlur = event => {
          setEmail(event.target.value);
     }
     const handlePasswordBlur = event => {
          setPassword(event.target.value)
     }

     if (user) {
          navigate(from, { replace: true });
     }

     const handleUserSignIn = event => {
          event.preventDefault();
          signInWithEmailAndPassword(email, password)
     }

     // const [email, setEmail] = useState('');
     // const [password, setPassword] = useState('');
     // const [
     //      signInWithEmailAndPassword,
     //      user,
     //      loading,
     //      error,
     // ] = useSignInWithEmailAndPassword(auth);

     // const navigate = useNavigate();
     // // const location = useLocation();
     // // const from = location.state?.from?.pathname || '/';

     // const handleEmailBlur = event => {
     //      setEmail(event.target.value);
     // }

     // const handlePasswordBlur = event => {
     //      setPassword(event.target.value);
     // }

     // // if (user) {
     // //      navigate(from, { replace: true });
     // // }

     // const handleUserSignIn = event => {
     //      event.preventDefault();
     //      signInWithEmailAndPassword(email, password);
     // }

     return (
          <div className='form-container'>
               <div>
                    <h2 className='form-title'>Login</h2>
                    <form onSubmit={handleUserSignIn}>
                         <div className="input-group">
                              <label htmlFor="email">Email</label>
                              <input type="email"
                                   name="email" id="" required onBlur={handleEmailBlur} />
                         </div>
                         <div className='input-group'>
                              <label htmlFor="password">Password</label>
                              <input type="password" name="password" id="" required onBlur={handlePasswordBlur} />
                         </div>
                         <p style={{ 'color': "red" }}> {error?.message} </p>
                         <p>
                              {
                                   loading && <p>Loading...</p>
                              }
                         </p>
                         <input className='form-submit' type="submit" value="Login" />
                    </form>
                    <p className='form-link-container'>
                         New to Ema-John?
                         <Link className='form-link' to='/signup'> Create an Account</Link>
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

export default Login;