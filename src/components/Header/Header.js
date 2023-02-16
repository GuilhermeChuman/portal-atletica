import styles from './Header.module.css'
import Logo from '../../assets/Logo.png'

function Header() {
    return (
        <div className={styles.header}>
            <img src={Logo} className={styles.title}/>
        </div>   
    );
}

export default Header;