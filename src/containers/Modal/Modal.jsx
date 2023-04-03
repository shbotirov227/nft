import React from 'react';
import ModalItem from "../../components/ModalItem/ModalItem";

import "./Modal.scss";

const modalData = [
    {
        id: 1,
        title: "Категории",
        button: ["Премиум", "Искусство", "Знаменитости", "Киберспорт", "Благотворительность"],
    },
    {
        id: 2,
        title: "Типы файлов",
        button: ["Изображения", "Видео", "Аудио"],
    },
    {
        id: 3,
        title: "Типы продаж",
        button: ["Фикс. цена", "Аукцион активен"],
    },
    {
        id: 4,
        title: "Сеть NFT",
        button: ["ETH", "BNB", "USDC"],
    },
    {
        id: 5,
        title: "Редкость",
        button: ["Уникальная", "Редкая", "Эпическая"],
    }
]

const Modal = ({ setIsModalOpen }) => {
    return (
        <div className="Modal">
            {
                modalData.map((item, index) => {
                    return (
                        <ModalItem
                            key={index}
                            title={item.title}
                            button={item.button}
                            index={index}
                        />
                    )
                })
            }
            <button className="Modal-btn" onClick={() => setIsModalOpen(false)}>Применить</button>
        </div>
    )
}

export default Modal;
