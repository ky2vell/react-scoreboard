import React from "react";
import "../App.css";
import eagles from "../images/Eagles.png";
import lions from "../images/Lions.png";

const TopRow = (props) => {
    return (
        <div className="topRow">
            <div className="home">
                <img className="team__logo" src={lions} alt="Home Team Logo" />
                <div className="home__score">{props.homeScore}</div>
            </div>
            <div className="timer">00:03</div>
            <div className="away">
                <img className="team__logo" src={eagles} alt="Home Team Logo" />
                <div className="away__score">{props.awayScore}</div>
            </div>
        </div>
    );
};

export default TopRow;
