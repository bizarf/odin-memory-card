import React, { useState } from "react";

export default function Score() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const resetScore = () => {
        if (score > bestScore) {
            setBestScore(score);
            setScore(0);
        } else {
            setScore(0);
        }
    };

    const increaseScore = () => {
        setScore(score + 1);
    };

    return (
        <div>
            <p>Score: {score}</p>
            <p>Best Score: {bestScore}</p>
            {/* debug */}
            <button onClick={increaseScore}>Add one</button>
            <button onClick={resetScore}>Reset</button>
        </div>
    );
}
