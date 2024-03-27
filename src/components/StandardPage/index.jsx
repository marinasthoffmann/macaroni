import styles from './StandardPage.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTheme from 'styles/Theme.module.scss';

export default function StandardPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>          
                    The house of code and pasta
                </div>
            </header>
            <div className={stylesTheme.container}>
                <Outlet />
            </div>
        </>
    );
}