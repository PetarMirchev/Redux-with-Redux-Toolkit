import React from 'react';
import './rightbar.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Recommendation from '../recommendation/Recommendation';

const Rightbar = () => {
  return (
    <div className='rightbsar'>
        <div className="rightbarWrapper">
            <Recommendation type='user'/>
            <Recommendation type='popular'/>
            <Recommendation type='editor'/>
            <button className='rightButton'>
                See More
                <ArrowDropDownIcon/>
            </button>
        </div>
    </div>
  )
}

export default Rightbar;