import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Navbar () {

    const routes = [{
        label: 'Home',
        to: '/'
    }, {
        label: 'Menu',
        to: '/menu'
    }, {
        label: 'About',
        to: '/about'
    }]

    return (
        <nav className={styles.navbar}>
            <Logo />
            <ul className={styles.navbar__list}>
                {routes.map((route, index) => (
                    <li key={index} className={styles.navbar__link}>
                        <Link to={route.to}>{route.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}