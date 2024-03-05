import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styles from './Technology.module.scss'

export default function Technology() {
    const technologyRoute = useParams();
    const [technology, setTechology] = useState({});

    useEffect(() => {
        fetch('../../../data.json')
            .then(res => res.json())
            .then(data => {
                if(location.pathname === '/Technology') {
                    setTechology(data.technology[0])
                } else {
                    setTechology(data.technology[technologyRoute.technology])
                }
            })
    }, [technologyRoute])

    return(
        <div>
            <p className={styles.title}><span>03</span>SPACE LAUNCH 101</p>
            <div className={styles.image}>
            {technology.images && <img className={styles.technologyImage} src={technology.images.landscape} alt="" width={375} height={170} />}
            </div>
            <div>
                <nav>
                    <ul className={styles.listContainer}>
                        <li>
                            <Link to={location.pathname === '/Technology' ? '0' : '../0'} className={location.pathname === '/Technology' || location.pathname === '/Technology/0' ? `${styles.isActive}` : `${styles.isPending}`}>1</Link>
                        </li>
                        <li>
                            <Link to={location.pathname === '/Technology' ? '1' : '../1'} className={location.pathname === '/Technology/1' ? `${styles.isActive}` : `${styles.isPending}`}>2</Link>
                        </li>
                        <li>
                            <Link to={location.pathname === '/Technology' ? '2' : '../2'} className={location.pathname === '/Technology/2' ? `${styles.isActive}` : `${styles.isPending}`}>3</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.descriptionContainer}>
                    <p className={styles.heading}>THE TERMINOLOGY...</p>
                    <h2 className={styles.headingName}>{technology.name}</h2>
                    <p className={styles.description}>{technology.description}</p>
                </div>
            </div>
        </div>
    )
}