import { useState } from "react";
import CardGrid from "./components/CardGrid";
import Score from "./components/Score";
import hololiveLogo from "./assets/Hololive_Production_logo.svg";

export default function App() {
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
        <div className="app">
            <div className="content">
                <header className="header">
                    <div className="header__banner">
                        <img
                            src={hololiveLogo}
                            alt="Hololive company logo"
                            className="header__banner--logo"
                        />
                        <span className="header__banner--title">
                            Memory Game
                        </span>
                    </div>
                    <Score
                        setScore={setScore}
                        score={score}
                        bestScore={bestScore}
                        setBestScore={setBestScore}
                    />
                </header>
                <span className="instructions">
                    Get the highest score by clicking each image once!
                </span>
                <CardGrid
                    resetScore={resetScore}
                    increaseScore={increaseScore}
                />
            </div>
            <footer>
                <span>Page created by Bizarf</span>
                <span>© 2016 COVER Corp.</span>
            </footer>
        </div>
    );
}
