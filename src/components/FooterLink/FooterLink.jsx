import React from 'react';

import "./FooterLink.scss";

const FooterLink = ({ title, link, url }) => {
    return (
        <div className="FooterLink">
            <h4 className="FooterLink-title">{title}</h4>
            {link.map((el, i) => <a key={i} href={url}className="FooterLink-link">{el}</a>)}
        </div>
    )
}

export default FooterLink;
