import React from 'react';
import styles from './newsletter.scss';
import InputForm from "../../UI/inputForm/InputForm";

const Newsletter = () => {
    return (
        <div className={styles.root}>
            <div className={styles.links}>
                <span className={styles.signup_txt}>Newsletter Signup</span>
                <InputForm/>
            </div>
        </div>
    );
};

export default Newsletter;