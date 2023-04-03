import React from 'react'
import FooterLogo from "../../assets/icons/footerLogo.png";
import TwitterIcon from "../../assets/icons/twitterIcon.png";
import VkIcon from "../../assets/icons/vkIcon.png";
import FooterBottomIcon from "../../assets/icons/footerBottomIcon.png";
import FooterLink from "../../components/FooterLink/FooterLink";

import "./Footer.scss";

const data = [
    {
        id: 0,
        title: "NFT",
        link: ["Что такое NFT", "Создайте NFT с нами"],
        url: "/"
    },
    {
        id: 1,
        title: "Компания",
        link: ["О нас", "Отправить запрос"],
        url: "/"
    },
    {
        id: 2,
        title: "Другое",
        link: ["Условия использования", "Политика конфиденциальности"],
        url: "/"
    },
]

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-container">
                <div className="Footer-inner">
                    <div className="Footer-left">
                        <img src={FooterLogo} alt="footerLogo" />
                        <span className="FooterLink-link">Россия, г. Москва, 119002</span>
                        <span className="FooterLink-link">ул. Арбат 51/1/8А</span>
                        <a href="mailto:e-mail: info@lionmax.ru" className="FooterLink-link email">e-mail: info@lionmax.ru</a>
                        
                        <div className="flex">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/"><img className="Footer-icon" src={TwitterIcon} alt="twitterIcon" /></a>
                            <a target="_blank" rel="noreferrer" href="https://vk.com/"><img className="Footer-icon" src={VkIcon} alt="vkIcon" /></a>
                        </div>
                    </div>

                    <div className="flex items-start justify-between">
                        {data.map((el, i) => <FooterLink key={i} title={el.title} link={el.link} url={el.url} />)}
                    </div>

                </div>

                <div className="Footer-bottom">
                    <div className="Footer-bottom-icon">
                        <img className="" src={FooterBottomIcon} alt="footerBottomIcon" />
                    </div>
                    <span className="Footer-copyright">@ tnft.ru Company, Inc</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
