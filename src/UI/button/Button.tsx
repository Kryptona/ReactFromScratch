import React from 'react';
import styles from "./button.scss";

interface Props {
    readonly name: string;
}

// eslint-disable-next-line react/prop-types
const Button: React.FC<Props> = ({name}) => {
    return (
        <div className={styles.root}>
            <button className={styles.bt}>
                {name}
            </button>
        </div>
    );
};

export default Button;