import React from "react";

export default function Score(props) {
    return (
        <div>
            <p>Score: {props.score}</p>
            <p>Best Score: {props.bestScore}</p>
        </div>
    );
}
