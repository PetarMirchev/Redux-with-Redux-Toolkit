import React from 'react';
import "./navbar.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useSelector } from 'react-redux';

export default function Navbar(){

  // pass user "nameX" from userSlice
  const name = useSelector( (state) => state.user.userInfo.name);

  console.log(`Navbar is re-rendered!`);

  return (
    <div className='navbar'>
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className='logo'>Pepi App</span>
          <span className='navbarLink'>Home</span>
          <span className='navbarLink'>About</span>
          <span className='navbarLink'>Contact</span>
        </div>
      <div className="navbarCenter">
        <div className="search">
          <input
            type="text"
            placeholder='search......'
            className='searchInput'
          />
        </div>
      </div>
        <div className="navbarRight">
          <img
            className='avatar'
            src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=''
          />
          <span className='navbarName'>{name}</span>
          <ArrowDownwardIcon/>
        </div>
      </div>
    </div>
  )
};
