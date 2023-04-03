import React from 'react';
import Img from "../../assets/images/img.png";
import AvatarImg from "../../assets/images/avatarImg.png";
import StatusIcon from "../../assets/icons/statusIcon.png";
import "./Card.scss";

// const fetchData = require("../../fetch.js");

// const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1"

const Card = ({ image, name, id, symbol, price, ath }) => {

    
    // useEffect( () => {
    //     axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1`, {
    //         headers: { 
    //             'Access-Control-Allow-Origin' : '*',
    //             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //         },
    //     //     headers: {
    //     //         method: "GET", // *GET, POST, PUT, DELETE, etc.
    //     //         mode: "no-cors", // no-cors, *cors, same-origin
    //     //         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //     //         credentials: "same-origin", // include, *same-origin, omit
    //     //         "Content-Type": "application/json",
    //     //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //     //         redirect: "follow", // manual, *follow, error
    //     //         referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //     //         body: JSON.stringify(data), // body data type must match "Content-Type" header
    //     //   },
    //     })
    //     .then(res => res.json())
    //     .then((items) => {
    //         setData(items);
    //         console.log(data);
    //       }).catch(err => err);
    // },[data])

    


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
