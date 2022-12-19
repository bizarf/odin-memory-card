import { useState } from "react";
import CardGrid from "./components/CardGrid";
import Score from "./components/Score";

function App() {
    return (
        <div>
            <header>
                Memory card game
                <Score />
            </header>
            <CardGrid />
        </div>
    );
}

export default App;
