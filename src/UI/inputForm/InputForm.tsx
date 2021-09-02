import React from 'react';
import styles from "./inputForm.scss";
import Button from "../button/Button";

const InputForm = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <input placeholder={"test@youremail.com"}/>
                <Button name={"SIGNUP"}/>
            </div>
        </div>
    );
};

export default InputForm;