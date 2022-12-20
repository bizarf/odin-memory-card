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

    const [cardClicked, setCardClicked] = useState([]);
    // user click card, if the card clicked's name is already in the array then reset the score board, otherwise add the card to cardClicked array and increase the score
    const handleClick = (e) => {
        const name = e.target.dataset.name;
        if (cardClicked.find((names) => names === name)) {
            setCardClicked([]);
            return resetScore();
        }
        setCardClicked([...cardClicked, name]);
        increaseScore();
    };

    return (
        <div className="app">
            <div className="content">
                <header>
                    <div className="headerBanner">
                        <img
                            src={hololiveLogo}
                            alt="Hololive company logo"
                            className="hololiveLogo"
                        />
                        <span className="title">Memory Game</span>
                    </div>
                    <Score
                        setScore={setScore}
                        score={score}
                        bestScore={bestScore}
                        setBestScore={setBestScore}
                    />
                </header>
                <CardGrid handleClick={handleClick} />
            </div>
            <footer>
                <span>Page created by Bizarf</span>
                <span>© 2016 COVER Corp.</span>
            </footer>
        </div>
    );
}
