import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import styles from './CrewMates.module.scss'



export default function CrewMates() {
    const [crewMate, setCrewMate] = useState({})
    const crew = useParams();

    useEffect(() => {
        fetch('../../../data.json')
            .then(res => res.json())
            .then(data => {
                if(location.pathname === '/Crew') {
                    setCrewMate(data.crew[0])
                } else {
                    setCrewMate(data.crew[crew.crew])
                }
            })
    }, [crew])

    return(
        <div className={styles.mainContainer}>
            <p className={styles.title}><span>02</span>MEET YOUR CREW</p>
            <div className={styles.subContainer}>
                <div className={styles.bioContainer}>
                    <div className={styles.bioWrapper}>
                        <p className={styles.role}>{crewMate.role}</p>
                        <h3 className={styles.heading3}>{crewMate.name}</h3>
                        <p className={styles.bio}>{crewMate.bio}</p>
                    </div>
                    <nav>
                        <ul className={styles.navContainer}>
                            <li>
                                <Link to={location.pathname === '/Crew' ? '0' : '../0'} className={location.pathname === '/Crew/0' || location.pathname === '/Crew' ? styles.isActive : styles.isPending}><span className={styles.circle}></span></Link>
                            </li>
                            <li>
                                <Link to={location.pathname === '/Crew' ? '1' : '../1'} className={location.pathname === '/Crew/1' ? styles.isActive : styles.isPending}><span className={styles.circle}></span></Link>
                            </li>
                            <li>
                                <Link to={location.pathname === '/Crew' ? '2' : '../2'} className={location.pathname === '/Crew/2' ? styles.isActive : styles.isPending}><span className={styles.circle}></span></Link>
                            </li>
                            <li>
                                <Link to={location.pathname === '/Crew' ? '3' : '../3'} className={location.pathname === '/Crew/3' ? styles.isActive : styles.isPending}><span className={styles.circle}></span></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.imgContainer}>
                    {crewMate.images && <img src={crewMate.images['png']} className={styles.crewImage} alt="" />}
                </div>
            </div>
        </div>
    )
}