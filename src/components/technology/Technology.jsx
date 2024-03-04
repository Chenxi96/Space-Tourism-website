import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from './Technology.module.scss'

export default function Technology() {
    const [technology, setTechology] = useState({});

    useEffect(() => {
        fetch('../../../data.json')
            .then(res => res.json())
            .then(data => setTechology(data.technology[0]))
    }, [])

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
                            <Link className={styles.list}>1</Link>
                        </li>
                        <li>
                            <Link className={styles.list}>2</Link>
                        </li>
                        <li>
                            <Link className={styles.list}>3</Link>
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