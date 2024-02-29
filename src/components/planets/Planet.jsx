import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styles from './Planet.module.scss'

export default function Planet() {
    const [planet, setPlanet] = useState({});
    const name = useParams();

    useEffect(() => {
        fetch('../../../data.json')
            .then(res => res.json())
            .then(data => {
                if(location.pathname === '/Destination') {
                    setPlanet(data.destinations[0])
                } else {
                    setPlanet(data.destinations[name.name])
                }
            })
    }, [name])


    return (
        <section className={styles.mainContainer}>
            <div className={styles.container}>
                <p className={styles.headingTitle}><span>01</span>PICK YOUR DESTINATION</p>
                {planet.images && <img className={styles.planetImage} src={planet.images['png']} alt="" height={170} width={170} />}
            </div>
            <div className={styles.secondContainer}>
                <nav>
                    <ul className={styles.navContainer}>
                        <li><Link to={location.pathname === '/Destination' ? '0' : '../0'} aria-current='page' className={location.pathname === '/Destination/0' || location.pathname === '/Destination' ? `${styles.isActive}` : `${styles.isPending}`} relative="path">MOON</Link></li>
                        <li><Link to={location.pathname === '/Destination' ? '1' : '../1'} aria-current='page' className={location.pathname === '/Destination/1' ? `${styles.isActive}` : `${styles.isPending}`} relative="path">MARS</Link></li>
                        <li><Link to={location.pathname === '/Destination' ? '2' : '../2'} aria-current='page' className={location.pathname === '/Destination/2' ? `${styles.isActive}` : `${styles.isPending}`} relative="path">EUROPA</Link></li>
                        <li><Link to={location.pathname === '/Destination' ? '3' : '../3'} aria-current='page' className={location.pathname === '/Destination/3' ? `${styles.isActive}` : `${styles.isPending}`} relative="path">TITAN</Link></li>
                    </ul>
                </nav>
                <h1 className={styles.heading1}>{planet.name}</h1>
                <p className={styles.description}>{planet.description}</p>
                <div className={styles.infoContainer}>
                    <div>
                        <p className={styles.title}>AVG. DISTANCE</p>
                        <p className={styles.info}>{planet.distance}</p>
                    </div>
                    <div>
                        <p className={styles.title}>EST. TRAVEL TIME</p>
                        <p className={styles.info}>{planet.travel}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}