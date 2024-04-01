import React from 'react';
import {LogoProps} from "./Logo.props";
import styles from './Logo.module.scss';
export const Logo = ({...props}:LogoProps) => {
    return (
        <div className={styles.logo} {...props}>
            <span className={styles.text}>panda</span>
        </div>
    );
};