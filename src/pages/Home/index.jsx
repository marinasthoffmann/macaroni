import menu from "data/menu.json";
import styles from './Home.module.scss'
import stylesTheme from 'styles/Theme.module.scss';

export default function Home() {
    
    let recomendeds = [...menu];
    recomendeds = recomendeds.sort(() => 0.5 - Math.random()).splice(0,3);

    return (
        <section>
            <h3 className={stylesTheme.title}>House recommendations</h3>
            <div className={styles.recomendeds}>
                {recomendeds.map(item => (
                    <div key={item.id} className={styles.recomended}>
                        <div className={styles.recomended__image}>
                            <img src={item.photo} alt={item.title}/>
                        </div>
                        <button className={styles.recomended__button}>
                            View more
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}