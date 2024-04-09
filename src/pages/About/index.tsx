import styles from './About.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import house from 'assets/about/house.png';
import pasta1 from 'assets/about/pasta1.png';
import pasta2 from 'assets/about/pasta2.png';

const images = [pasta1, pasta2];

export default function About() {    

    return (
        <section>
            <h3 className={stylesTheme.title}>About</h3>
            <div className={styles.aboutUs}>
                <img src={house} alt='House Macaroni'/>
                <div className={styles.aboutUs__text}>
                    <p>
                        We at Macaroni offer you, our dear customers, the tastiest and most sophisticated Homemade Italian Pasta in St. Gallen! We value the traditional ingredients of Italian cuisine, fresh and of excellent quality to make your experience even more intense!
                    </p>
                    <p>
                        We also have a meat menu with many options to suit your taste!
                    </p>
                    <p>
                    To accompany Italian pasta, Macaroni has a reserve of special wines, which pair perfectly with your meal, be it meat or pasta!
                    </p>
                </div>                
            </div>
            <div className={styles.images}>
                    {images.map((image, index) => (
                        <div key={index} className={styles.images__image}>
                            <img src={image} alt='pasta image'/>
                        </div> 
                    ))}
            </div>
        </section>
    );
}