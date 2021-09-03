import React from 'react';
import styles from './footer.scss';
import LinkColumn from "../../UI/linkColumn/LinkColumn";
import logo from '../../img/logo.png';
import twitter from "../../img/twitter_logo.png";
import facebook from "../../img/facebook_logo.png";
import google from "../../img/google_logo.png";


const Footer = () => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <div className={styles.containerCompany}>
                    <span className={styles.header}>COMPANY</span>
                    <img src={logo}/>
                    <div className={styles.descFooter}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
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
                    {/*<img src={facebook}/>*/}
                    {/*<img src={twitter}/>*/}
                    <img src={google}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;