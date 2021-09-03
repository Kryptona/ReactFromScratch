import React from 'react';
import styles from './footer.scss';
import LinkColumn from "../../UI/linkColumn/LinkColumn";
import logo from '../../img/logo.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <div className={styles.containerCompany}>
                    <span className={styles.header}>COMPANY</span>
                    <img src={logo}/>
                    <div className={styles.descFooter}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                        diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                    </div>
                </div>
                <div className={styles.containerLinks}>
                    <span className={styles.header}>LINKS</span>
                    <div className={styles.links}>
                        <LinkColumn links={["HOME", "ABOUT", "SERVICES", "PROJECTS", "CONTACT US"]}/>
                        <LinkColumn links={["FQL", "TERMS", "CAREERS"]}/>
                        <LinkColumn links={["BLOG", "PARTNERS", "NEWS"]}/>
                    </div>
                </div>
                <div className={styles.containerContactUs}>
                    <span className={styles.header}>CONTACT US</span>
                    <div className={styles.descContact}>
                        213 Baker Street
                        <br/>Oriel City Kounty
                        <br/>7000 KNW,
                        <br/>Kountry Name
                        <br/>
                        <br/>+23 994 233 4022
                        <br/>
                        <br/>info@konstruct.com
                    </div>
                </div>
                <div className={styles.logoLinks}>
                    <FontAwesomeIcon icon={faFacebookSquare} style={{color: "white"}}/>
                    <FontAwesomeIcon icon={faTwitter} style={{color: "white"}}/>
                    <FontAwesomeIcon icon={faGoogle} style={{color: "white"}}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;