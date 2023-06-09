import React from 'react';

import "./ModalItem.scss";

const ModalItem = ({ title, button, }) => {
    return (
        <div className="ModalItem">
            <div className="ModalItem-title">
                <h4 className="ModalItem-name">{title}</h4>
                <span className="ModalItem-line"></span>
            </div>
            {
                button.map((el, i) => {
                    return (
                        <div key={i} className="flex justify-start items-center">
                            <input className="checkbox" type="checkbox" name="" id={el} />
                            <label className="ModalItem-label" htmlFor={el}>{el}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ModalItem;
