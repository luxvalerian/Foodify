import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => {
    return ( //start with function-based component first
        <footer className={styles.footer}>
            <p>Copyright &copy; Foodify {new Date().getFullYear()}</p>
            
        </footer>
    );
}

export default Footer;