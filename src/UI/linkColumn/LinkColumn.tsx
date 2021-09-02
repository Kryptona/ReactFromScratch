import React from 'react';
import styles from './links.scss';

interface Props {
    readonly links: string[];
}

// eslint-disable-next-line react/prop-types
const LinkColumn: React.FC<Props> = ({links}) => {
    return (
        <div className={styles.root}>
            {/* eslint-disable-next-line react/prop-types */}
            {links.map((link, index) => (
                <div className={styles.link} key={index}>{link}</div>
            ))}
        </div>
    );
};

export default LinkColumn;