import React from 'react';
import bg from '../../img/header_bg_min.png';
import logo from '../../img/logo.png';
import styles from './header.scss';

const Header = () => {
    return (
        <div className={styles.root}>
            <img className={styles.header_bg} src={bg} alt={"logo"}/>
            <div className={styles.main_wrapper}>
                <img className={styles.logo_img} src={logo} alt={"logo"}/>
                <div>
                    <div className={styles.center_txt_wrapper}>
                        PARTNER WITH KONSTRUCT
                    </div>
                    <div className={styles.desc_txt_wrapper}>
                        An award-winning construction management firm
                    </div>
                </div>
                <div className={styles.scroll_down_txt}>
                    SCROLL DOWN
                </div>

            </div>
        </div>
    );
};

export default Header;