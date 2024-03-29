import React from 'react';
import "./menulink.css";
import { useSelector } from 'react-redux';


const MenuLink = ({icon, text}) => {

  const name = useSelector( (state) => state.user.userInfo.name); // passed user from userSlice


  return (
    <div className='menulink'>
        {icon}
        <span className='menuLinkText'>{text}</span>
        <span className='menuLinkTextName'>
            {text === "Logout" && `(${name})`}
        </span>
    </div>
  );
}

export default MenuLink;