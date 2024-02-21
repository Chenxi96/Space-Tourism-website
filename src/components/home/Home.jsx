import styles from './Home.module.scss'

export default function Home() {
    return (
        <section className={styles.container}>
            <p>SO, YOU WANT TO TRAVEL TO</p>
            <h1 className={styles.heading1}>SPACE</h1>
            <p className={styles.body}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            <a href="">
                <p className={styles.exploreBtn}>EXPLORE</p>
            </a>
        </section>
    )
}