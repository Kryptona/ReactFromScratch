import React from 'react';
import styles from './card.scss';

interface Props {
    readonly img: React.ReactNode;
    readonly title: string;
    readonly desc: string;
}

// eslint-disable-next-line react/prop-types
const Card: React.FC<Props> = ({img, title, desc}) => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.icon}>
                    {img}
                </div>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.desc}>
                    {desc}
                </div>
            </div>

        </div>
    );
};

export default Card;