import React from 'react';
import styles from './about.scss';
import deliver from '../../img/deliver.png';
import manage from '../../img/manage.png';
import plan from '../../img/plan.png';

const About = () => {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.section_name}>OUR STORY</div>
                <div className={styles.band}/>
            </div>
            <div className={styles.information}>
                <div className={styles.text}>
                    <div className={styles.header}>Founded in 2011 by John Mathew Smith, <span>Konstruct</span> has
                        become the number one
                        construction
                        management firm
                    </div>
                    <div className={styles.body}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                    </div>
                </div>
                <div className={styles.images}>
                    <div className={styles.image}>
                        <img src={plan} alt="deliver"/>
                        <div className={styles.name}>
                            WE <br/>PLAN
                        </div>
                    </div>
                    <div className={styles.image}>
                        <img src={manage} alt="manage"/>
                        <div className={styles.name}>
                            WE <br/>MANAGE
                        </div>
                    </div>
                    <div className={styles.image}>
                        <img src={deliver} alt="plan"/>
                        <div className={styles.name}>
                            WE <br/>BUILD
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;