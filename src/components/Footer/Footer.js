import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <label>Produzido por: Guilherme Chuman</label>
            <label>https://github.com/GuilhermeChuman</label>
        </div>
    );
}

export default Footer;