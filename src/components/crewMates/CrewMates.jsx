import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import styles from './CrewMates.module.scss'



export default function CrewMates() {
    const [crewMate, setCrewMate] = useState({})

    useEffect(() => {
        fetch('../../../data.json')
            .then(res => res.json())
            .then(data => setCrewMate(data.crew[0]))
    })

    return(
        <div>
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
                                <Link><span className={styles.circle}></span></Link>
                            </li>
                            <li>
                                <Link><span className={styles.circle}></span></Link>
                            </li>
                            <li>
                                <Link><span className={styles.circle}></span></Link>
                            </li>
                            <li>
                                <Link><span className={styles.circle}></span></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.imgContainer}>
                    {crewMate.images && <img src={crewMate.images['png']} alt="" height={222} width={177.12}/>}
                </div>
            </div>
        </div>
    )
}