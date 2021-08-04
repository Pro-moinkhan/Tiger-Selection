import React from 'react';
import "./Player.css";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const handleSelected = props.handleSelected;
    const players = props.player;
    const {img, name, salary, Category} = players;
    return (
        <div className="playerMainDiv">
            <div className="playerImgDiv">
            <img className="playerImg" src={img} alt="" />
            </div>
            <div className="playerInfo">
            <h2>{name}</h2>
            <h2>Salary: {salary}</h2>
            <h2 id="grade">Category: {Category}</h2>
            <br />
            <Button variant="success" onClick={() => handleSelected(players)} > <FontAwesomeIcon icon={faPlus} /> Select</Button>
            </div>
        </div>
    );
};

export default Player;