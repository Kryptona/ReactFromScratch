import React from 'react';
import styles from './footer.scss';
import LinkColumn from "../../UI/linkColumn/LinkColumn";

const Footer = () => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <div className={styles.containerLinks}>
                    <div className={styles.links}>
                        <LinkColumn links={["HOME", "ABOUT", "SERVICES", "PROJECTS", "CONTACT US"]}/>
                        <LinkColumn links={["FQL", "TERMS", "CAREERS"]}/>
                        <LinkColumn links={["BLOG", "PARTNERS", "NEWS"]}/>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;