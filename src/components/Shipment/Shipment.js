import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Shipment = () => {
     const [user] = useAuthState(auth)
     const [name, setName] = useState('');
     const [email, setEmail] = useState('')
     const [address, setAddress] = useState('')
     const [phone, setPhone] = useState('')
     const [error, setError] = useState('')
     // const navigate = useNavigate();

     const handleNameBlur = event => {
          setName(event.target.value)
     }

     const handleAdressBlur = event => {
          setAddress(event.target.value)
     }

     const handlePhoneBlur = event => {
          setPhone(event.target.value)
     }

     const handleCreateUser = event => {
          event.preventDefault();
          const shipping = { name, email, address, phone }

     }
     return (
          <div className='form-container'>
               <div>
                    <h2 className='form-title'>Shipping Information</h2>
                    <form onSubmit={handleCreateUser}>
                         <div className="input-group">
                              <label htmlFor="name">Your Name</label>
                              <input onBlur={handleNameBlur} type="name" name="name" id="" required />
                         </div>
                         <div className="input-group">
                              <label htmlFor="email">Your Email</label>
                              <input value={user?.email} type="email" name="email" id="" required readOnly />
                         </div>
                         <div className='input-group'>
                              <label htmlFor="password">Your Address</label>
                              <input type="text" onBlur={handleAdressBlur} name="address" id="" required />
                         </div>
                         <div className='input-group'>
                              <label htmlFor="phone">Your Phone Number</label>
                              <input type="text" onBlur={handlePhoneBlur} name="phone" id="" required />
                              <p style={{ "color": 'red' }}>{error}</p>
                         </div>
                         <input className='form-submit' type="submit" value="Adde Shipping" />
                    </form>

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

export default Shipment;