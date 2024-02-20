
import Logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import styles from '../App.module.scss'

export default function Header() {
    return (
        <header className={styles.container}>
            <img className={styles.imgLogo} src={Logo} alt="" width={48} height={48}/>
            <nav className={styles.navContainer}>
                <img className={styles.hamburger} src={hamburger} alt="" width={24} height={21} />
                <div className={styles.mobileContainer}>
                    <img src={close} alt="" width={19.09} height={19.09}/>
                    <a href=""><span>00</span>HOME</a>
                    <a href=""><span>01</span>DESTINATION</a>
                    <a href=""><span>02</span>CREW</a>
                    <a href=""><span>03</span>TECHNOLOGY</a>
                </div>
            </nav>
        </header>
    )
}