import React from 'react';
import "./warning.css";

const Warning = () => {
  return (
    <div className='warning'>
        Deleting account cannot be undone <b>XXXX</b>! You should confirm your
        password to delete your account.
    </div>
  );
}

export default Warning