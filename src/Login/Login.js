import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
     return (
          <div className='form-container'>
               <div>
                    <h2 className='form-title'>Login</h2>
                    <form>
                         <div className="input-group">
                              <label htmlFor="email">Email</label>
                              <input type="email" name="email" id="" required />
                         </div>
                         <div className='input-group'>
                              <label htmlFor="password">Password</label>
                              <input type="password" name="password" id="" required />
                         </div>
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