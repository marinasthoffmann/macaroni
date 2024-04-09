import menu from "data/menu.json";
import styles from './Home.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import ourHouse from 'assets/our_house.png';
import { useNavigate } from "react-router-dom";

export default function Home() {
    
    let recomendeds = [...menu];
    recomendeds = recomendeds.sort(() => 0.5 - Math.random()).splice(0,3);
    const navigate = useNavigate();

    function redirectToDetails(dish: typeof menu[0]){
        navigate(`/dish/${dish.id}`, { state: { ...dish } });
    };

    return (
        <section>
            <h3 className={stylesTheme.title}>House recommendations</h3>
            <div className={styles.recomendeds}>
                {recomendeds.map(item => (
                    <div key={item.id} className={styles.recomended}>
                        <div className={styles.recomended__image}>
                            <img src={item.photo} alt={item.title}/>
                        </div>
                        <button 
                            className={styles.recomended__button}
                            onClick={() => redirectToDetails(item)}
                        >
                            View more
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={stylesTheme.title}>Our house</h3>
            <div className={styles.ourHouse}>
                    <img src={ourHouse} alt="House of Macaroni"/>
                    <div className={styles.ourHouse__adress}>
                        Grossacker 6 <br/><br/> Niederuzwil - SG
                    </div>
            </div>
        </section>
    );
}