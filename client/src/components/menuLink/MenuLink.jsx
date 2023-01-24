import React from 'react';
import "./menulink.css";

const MenuLink = ({icon, text}) => {
  return (
    <div className='menulink'>
        {icon}
        <span className='menuLinkText'>{text}</span>
        <span className='menuLinkTextName'>
            {text === "Logout" && "(Name X)"}
        </span>
    </div>
  );
}

export default MenuLink;