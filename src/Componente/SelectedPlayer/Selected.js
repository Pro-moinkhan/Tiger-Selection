import React from 'react';
import './Selected.css'
const Selected = (props) => {
    const selected = props.select;
    const { img, name, salary } = selected;
    return (
        <div className='selectedMainDiv'>
            <img src={img} alt="" />
            <div className="selectedInfo">
                <h5>{name}</h5>
                <h5 style ={{color: 'green', fontWeight: "770"}}>{salary}</h5>
            </div>
            <div className='totalArea'>
                
            </div>
        </div>
    );
};

export default Selected;