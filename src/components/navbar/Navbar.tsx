import React from 'react';
import styles from './navbar.scss';
import navbar_bg from "../../img/navbar_bg.png"
import Button from "../../UI/button/Button";

const Navbar = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <img className={styles.bg} src={navbar_bg}/>
                <div className={styles.content}>
                    <div className={styles.title}>
                        Want to build <br/> something amazing?
                    </div>
                    <Button name={"GET IN TOUCH"}/>
                </div>
            </div>


        </div>
    );
};

export default Navbar;