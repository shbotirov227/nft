import React, { useState } from 'react';
import Img from "../../assets/images/img.png";
import AvatarImg from "../../assets/images/avatarImg.png";
import StatusIcon from "../../assets/icons/statusIcon.png";
import "./Card.scss";

// const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1"

const Card = ({ image, name, id, symbol, price, ath, num }) => {

    const [ state, setState ] = useState(false)



    return (
        <div className={`Card ${symbol === "usdt" ? "bgGreen": ""}`}>
            <div className="flex items-center justify-center">
                <img className="Card-Img" src={image} alt="img" />
            </div>
            <h3 className="Card-name">{name}</h3>
            <div className="">
                <div className="flex">
                    <img className="avatarIcon" src={image} alt="avatarImg" />
                    <div>
                        <h4 className="Card-userName">{id}</h4>
                        <div className="flex">
                            <span className="Card-status">{ath}</span>
                            <img className="statusIcon" src={StatusIcon} alt="statusIcon" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <h4 className="Card-title">Редкость:</h4>   
                    <span className="Card-price">{symbol}</span>
                </div>
                <div className="flex items-center justify-between">
                    <h4 className="Card-title">Цена:</h4>
                    <span className="Card-price rubl">от {price} $</span>
                </div>
            </div>
            <button className="Card-btn">Купить</button>
        </div>
    )
}

export default Card;
