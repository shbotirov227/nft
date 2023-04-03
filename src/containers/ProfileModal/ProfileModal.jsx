import React from 'react'
import LogoutIcon from "../../assets/icons/logoutIcon.svg";
import ProfileImg from "../../assets/images/profileImg.png";

import "./ProfileModal.scss";

const ProfileModal = ({ setProfileModal }) => {
    return (
        <div className="ProfileModal">
            <div className="ProfileModal-left">
                <img className="ProfileModal-img" src={ProfileImg} alt="" />
                <div >
                    <h4 className="ProfileModal-title">@warwetkina2301</h4>
                    <p className="ProfileModal-about">Информация о себе.<br></br> Информация о себе.<br></br> Информация о себе.</p>
                </div>
            </div>
            
            <div className="ProfileModal-right">
                <button className="ProfileModal-btn">Профиль</button>
                <button className="ProfileModal-btn">Редактировать профиль</button>
                <button className="ProfileModal-btn">Мои операции</button>
                <button className="ProfileModal-btn logout" onClick={() => setProfileModal(false)}>Выйти   <img src={LogoutIcon} alt="" /></button>
            </div>
        </div>
    )
}

export default ProfileModal;
