import React from 'react';
import styles from './panel.scss';
import logoBlack from '../../img/logo_black.svg';

const Panel = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <img className={styles.logo_black} src={logoBlack} alt={"logo"}></img>
                <div className={styles.links}>
                    <a>HOME</a>
                    <a>ABOUT</a>
                    <a>SERVICES</a>
                    <a>WORK</a>
                    <a>CONTACT</a>
                </div>
            </div>
        </div>
    );
};

export default Panel;