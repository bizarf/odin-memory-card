import { useState } from "react";
import CardGrid from "./components/CardGrid";
import Score from "./components/Score";

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
    // user click card, add card name to array depending on find result
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
        <div>
            <header>
                Memory card game
                <Score
                    setScore={setScore}
                    score={score}
                    bestScore={bestScore}
                    setBestScore={setBestScore}
                />
            </header>
            <CardGrid handleClick={handleClick} />
        </div>
    );
}

// export default App;
