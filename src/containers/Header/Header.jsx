import React, { useState } from 'react';
import Logo from "../../assets/icons/logo.png";
import UserImg from "../../assets/icons/userImg.png";
import { SearchIcon } from "../../assets/icons";

import "./Header.scss";
import Modal from "../Modal/Modal";
import ProfileModal from "../ProfileModal/ProfileModal";

const Header = () => {

    const [ isLogin, setIsLogin ] = useState(true);
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ profileModal, setProfileModal ] = useState(false);

    return (
        <div className="Header">
            <div className="container">
                <div className="Header-top">
                    <div className="flex">
                        <img className="logo" src={Logo} alt="logo" />
                        <div className="flex items-center justify-between relative">
                            <SearchIcon />
                            <input className="search" type="text" name="search" placeholder="Поиск..." />
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <button className={`userAccount ${!isLogin === false ? "isLogin" : undefined}`} onClick={() => setProfileModal(true)}>
                            <img src={UserImg} alt="userImg" />
                        </button>


                        <button className={`login ${!isLogin === true ? "isLogin" : undefined}`} onClick={() => setIsLogin(false)}>Вход</button>
                        <button className={`auth ${!isLogin === true ? "isLogin" : undefined}`} onClick={() => setIsLogin(false)}>Регистрация</button>
                    </div>
                </div>
                
                    {
                        profileModal ? <ProfileModal setProfileModal={setProfileModal} /> : undefined
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
