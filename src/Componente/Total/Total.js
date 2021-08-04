import React from 'react';
import './Total.css'

const Total = (props) => {
    const player = props.SelectedPlayerInfo;
    let totalSalary = 0;
    for(let i=0; i<player.length; i++){
        const info = player[i];
        totalSalary = totalSalary + parseFloat(info.salary);
        console.log(info)
        
    }
    return (
        <div>
            <h1 className="totalArea">Total Salary is: <strong style={{color: "green"}}> {totalSalary}</strong> </h1>
        </div>
    );
};

export default Total;