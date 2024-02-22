
import Logo from '../../assets/shared/logo.svg'
import hamburger from '../../assets/shared/icon-hamburger.svg'
import close from '../../assets/shared/icon-close.svg'
import styles from './Header.module.scss'
import { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className={styles.container}>
            <img className={styles.imgLogo} src={Logo} alt="" width={48} height={48}/>
            <nav className={styles.navContainer}>
                {!isOpen && <img className={styles.hamburger} onClick={toggleDropdown} src={hamburger} alt="" width={24} height={21} /> }
                {isOpen && (
                <div className={styles.mobileContainer}>
                    <div>
                        <img onClick={toggleDropdown} src={close} alt="" width={19.09} height={19.09}/>
                    </div>
                    <a href=""><span>00</span>HOME</a>
                    <a href=""><span>01</span>DESTINATION</a>
                    <a href=""><span>02</span>CREW</a>
                    <a href=""><span>03</span>TECHNOLOGY</a>
                </div>
                )}
                <div className={styles.menuContainer}>
                    <a href=""><span>00</span>HOME</a>
                    <a href=""><span>01</span>DESTINATION</a>
                    <a href=""><span>02</span>CREW</a>
                    <a href=""><span>03</span>TECHNOLOGY</a>
                </div>
            </nav>
        </header>
    )
}