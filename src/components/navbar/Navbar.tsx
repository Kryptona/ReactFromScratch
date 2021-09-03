import React from 'react';
import styles from './navbar.scss';
import Button from "../../UI/button/Button";

const Navbar = () => {
    return (
        <div className={styles.root} style={{backgroundImage: `url(/navbar_bg.png)`}}>
            <div className={styles.containerNavbar}>
                <div className={styles.content} >
                    <div className={styles.titleNavbar}>
                        Want to build <br/> something amazing?
                    </div>
                    <Button name={"GET IN TOUCH"}/>
                </div>
            </div>


        </div>
    );
};

export default Navbar;