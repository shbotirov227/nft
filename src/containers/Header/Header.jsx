import React, { useEffect, useState } from 'react';
import Logo from "../../assets/icons/logo.png";
import UserImg from "../../assets/icons/userImg.png";
import { SearchIcon } from "../../assets/icons";

import "./Header.scss";
import Modal from "../Modal/Modal";
import ProfileModal from "../ProfileModal/ProfileModal";
import axios from "axios";

const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1";

const Header = () => {

    const [ isLogin, setIsLogin ] = useState(false);
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ profileModal, setProfileModal ] = useState(false);

    const [ search, setSearch ] = useState([]);
    
    

    return (
        <div className="Header">
            <div className="container">
                <div className="Header-top">

                    <div className="width">
                        <img className="logo" src={Logo} alt="logo" />
                        <div className="flex items-center justify-between relative">
                            <SearchIcon />

                            <input
                                className="search"
                                type="text" name="search"
                                placeholder="Поиск..."
                                onChange={(e) => setSearch(e.target.value)}
                            />

                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        {
                            setIsLogin ? (
                                <button className={`userAccount ${isLogin === false ? "hidden" : undefined}`} onClick={() => setProfileModal(true)}>
                                    <img src={UserImg} alt="userImg" />
                                </button>
                            ) : undefined
                        }

                        <button className={`login ${isLogin === true ? "hidden" : undefined}`} onClick={() => setIsLogin(true)}>Вход</button>

                        <button className={`auth ${isLogin === true ? "hidden" : undefined}`} onClick={() => setIsLogin(true)}>Регистрация</button>

                    </div>
                </div>
                
                    {
                        profileModal ? <ProfileModal setProfileModal={setProfileModal} setIsLogin={setIsLogin} /> : undefined
                    }

                <div className="Header-bottom">
                    <button className="Header-bottom-select" onClick={() => setIsModalOpen(true)}>Фильтры</button>

                    <div className="flex items-center justify-between relative">
                        <SearchIcon />
                        <input className="search" type="text" name="search" placeholder="Поиск..." />
                    </div>

                    <select name="" id="" className="Header-bottom-select">
                        <option value="">По умолчанию</option>
                        <option value="">По дате</option>
                        <option value="">Дешевле</option>
                        <option value="">Дороже</option>
                        <option value="">По популярности</option>
                    </select>
                </div>
            {
                isModalOpen ? <Modal setIsModalOpen={setIsModalOpen} /> : undefined
            }
            </div>

        </div>
    )
}

export default Header
