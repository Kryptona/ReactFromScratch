import React from 'react';
import styles from './services.scss';
import Button from "../../UI/button/Button";
import Card from "../card/Card";

import pens_logo from "../../img/pens_logo_card.svg";
import shop_logo from "../../img/shop_logo_card.svg";
import home_logo from "../../img/home_logo_card.svg";

const Services = () => {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.name}>
                    <div className={styles.section_name}>
                        OUR CAPABILITIES
                    </div>
                    <div className={styles.band}/>
                </div>
                <div className={styles.content}>
                    <div className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat
                    </div>
                    <Button name={"ALL SERVICES"}/>
                </div>
            </div>
            <div className={styles.card_container}>
                <Card
                    img={<img src={pens_logo}/>}
                    title={"PROJECT AND CONSTRUCTION MANAGEMENT"}
                    desc={
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, " +
                        "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."
                    }
                />
                <Card
                    img={<img src={shop_logo}/>}
                    title={"STRUCTURE AUDIT AND MAINTENANCE"}
                    desc={
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, " +
                        "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."
                    }
                />
                <Card
                    img={<img src={home_logo}/>}
                    title={"FACTORY CONSTRUCTION AND MODELING"}
                    desc={
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, " +
                        "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."
                    }
                />
            </div>
        </div>
    );
};

export default Services;