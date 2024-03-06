
import Logo from '../../assets/shared/logo.svg'
import hamburger from '../../assets/shared/icon-hamburger.svg'
import close from '../../assets/shared/icon-close.svg'
import styles from './Header.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
                    <Link to="/" className={location.pathname === '/' ? `${styles.isActiveMobile}` : `${styles.isPendingMobile}`} ><span>00</span>HOME</Link>
                    <Link to={location.pathname === "/" ? 'Destination' : '../Destination'} className={location.pathname === '/Destination' ? `${styles.isActiveMobile}` : `${styles.isPendingMobile}`} ><span>01</span>DESTINATION</Link>
                    <Link to={location.pathname === "/" ? 'Crew' : '../Crew'} className={location.pathname === '/Crew' ? `${styles.isActiveMobile}` : `${styles.isPendingMobile}`}><span>02</span>CREW</Link>
                    <Link to={location.pathname === "/" ? 'Technology' : '../Technology'} className={location.pathname === '/Technology' ? `${styles.isActiveMobile}` : `${styles.isPendingMobile}`}><span>03</span>TECHNOLOGY</Link>
                </div>
                )}
                <div className={styles.menuContainer}>
                    <Link to="/"><p><span>00</span>HOME</p></Link>
                    <Link to={location.pathname === "/" ? 'Destination' : '../Destination'}><p><span>01</span>DESTINATION</p></Link>
                    <Link to={location.pathname === "/" ? 'Crew' : '../Crew'}><p><span>02</span>CREW</p></Link>
                    <Link to={location.pathname === "/" ? 'Technology' : '../Technology'}><p><span>03</span>TECHNOLOGY</p></Link>
                </div>
            </nav>
        </header>
    )
}