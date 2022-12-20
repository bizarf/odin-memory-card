import React from "react";

export default function Score(props) {
    return (
        <div className="scoreBoard">
            <span>Score: {props.score}</span>
            <span>Best Score: {props.bestScore}</span>
        </div>
    );
}
