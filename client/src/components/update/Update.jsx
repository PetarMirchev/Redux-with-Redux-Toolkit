import React from 'react';
import './update.css';
import Warning from '../warning/Warning';
import { useState } from 'react';


const Update = () => {

    const [user,setUser] = useState('');
    const [email,setEmail] = useState('');

  return (
    <div className='update'>
        <div className="updateWrapper">
            <h3 className='updateWrapper'>Update Your Account</h3>
            <Warning/>
            <button className='delete'>Delete Account</button>
            <div className="updateContainer">
                <form>
                    <div className="formItem">
                        <label>Profile Picture</label>
                        <div className="profilePic">
                            <img className="avatar"
                            src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            />
                            <spam className='change'>Change</spam>
                        </div>
                    </div>
                    <div className="formItem">
                        <label>Username</label>
                        <input  className='formInput' type="text" placeholder='NameX'/>
                    </div>
                    <div className="formItem">
                        <label>Email</label>
                        <input  className='formInput' type="email" placeholder='hzdkv@example.com'/>
                    </div>
                    <div className="formItem">
                        <label>Password</label>
                        <input  className='formInput' type="password" placeholder='Password'/>
                    </div>
                    <button className='updateButton'>Update</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Update;