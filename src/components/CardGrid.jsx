// import React from "react";
import { useState } from "react";
import "../css/CardGrid.css";
// image imports
// Gen 0
import tokinoSora from "../assets/card-images/Gen-0/tokino_sora_icon.png";
import robocoSan from "../assets/card-images/Gen-0/roboco-san_icon.png";
import sakuraMiko from "../assets/card-images/Gen-0/sakuramiko_icon.png";
import hoshimachiSuisei from "../assets/card-images/Gen-0/hoshimachi_suisei_icon.png";
import azki from "../assets/card-images/Gen-0/AZKi_icon.png";
// Gen 1
import yozoraMel from "../assets/card-images/Gen-1/yozora_mel_icon.png";
import shirakamiFubuki from "../assets/card-images/Gen-1/shirakami_fubuki_icon.png";
import natsuiroMatsuri from "../assets/card-images/Gen-1/natsuiro_matsuri_icon.png";
import akaiHaato from "../assets/card-images/Gen-1/Akai_Haato_icon.png";
import akiRosenthal from "../assets/card-images/Gen-1/Aki_Rosenthal_icon.png";
import { useEffect } from "react";

export default function CardGrid(props) {
    // array of cards containing name, and a link to the image
    const gameCards = [
        {
            name: "Tokino Sora",
            image: tokinoSora,
        },
        {
            name: "Roboco-san",
            image: robocoSan,
        },
        {
            name: "Sakura Miko",
            image: sakuraMiko,
        },
        {
            name: "Hoshimachi Suisei",
            image: hoshimachiSuisei,
        },
        {
            name: "AZKi",
            image: azki,
        },
        {
            name: "Yozora Mel",
            image: yozoraMel,
        },
        {
            name: "Shirakami Fubuki",
            image: shirakamiFubuki,
        },
        {
            name: "Natsuiro Matsuri",
            image: natsuiroMatsuri,
        },
        {
            name: "Akai Haato",
            image: akaiHaato,
        },
        {
            name: "Aki Rosenthal",
            image: akiRosenthal,
        },
    ];

    const [cards, setCards] = useState([]);

    // make a copy of the gameCards array, and shuffle that copy with the sort and random functions. use the slice function to return an array containing 4 cards. set the cards state afterwards with the sliced deck
    const arrayShuffleAndSlice = () => {
        const newCards = [...gameCards].sort((a, b) => 0.5 - Math.random());
        const slicedCards = newCards.slice(0, 4);
        setCards([...slicedCards]);
    };

    // on render run the shuffle and slice function once
    useEffect(() => {
        arrayShuffleAndSlice();
    }, []);

    const [cardClicked, setCardClicked] = useState([]);
    // user click card, if the card clicked's name is already in the array then reset the score board, otherwise add the card to cardClicked array and increase the score
    const handleClick = (e) => {
        const name = e.target.dataset.name;
        if (cardClicked.find((names) => names === name)) {
            setCardClicked([]);
            props.resetScore();
            return arrayShuffleAndSlice();
        }
        setCardClicked([...cardClicked, name]);
        props.increaseScore();
        arrayShuffleAndSlice();
    };

    return (
        <div className="cardGrid">
            {cards.map((card, index) => {
                return (
                    <div
                        key={index}
                        data-name={card.name}
                        onClick={handleClick}
                        className="cardGrid__card"
                    >
                        <img
                            src={card.image}
                            alt={card.name}
                            className="cardGrid__image"
                            data-name={card.name}
                        />
                        <p className="cardGrid__name" data-name={card.name}>
                            {card.name}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
