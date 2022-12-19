import React from "react";
import "../css/CardGrid.css";
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

export default function CardGrid(props) {
    // i will need to use an array to hold the cards.
    // cards in the array will be objects containing the image name from the import, and a text name
    // create function to randomize the array
    // select 8 or 4 random cards using the slice function to make a new array
    // use a map to output divs with the array
    const cards = [
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

    // shuffle the card array
    const arrayShuffle = (array) => {
        return array.sort((a, b) => 0.5 - Math.random());
    };

    // slice the shuffled array to get a new array containing 4 cards
    const arraySlice = (array) => {
        return array.slice(0, 4);
    };

    return (
        <div className="cardGrid">
            {arraySlice(arrayShuffle(cards)).map((card, index) => {
                return (
                    <div
                        key={index}
                        data-name={card.name}
                        onClick={props.handleClick}
                    >
                        <img
                            src={card.image}
                            alt={card.name}
                            className="cardImage"
                            data-name={card.name}
                        />
                        <p className="cardName" data-name={card.name}>
                            {card.name}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
