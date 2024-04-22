import classNames from 'classnames';
import styles from './DishTags.module.scss';
import { Dish } from 'types/Dish';

export default function DishTags({
    category,
    size,
    serving,
    price
}: Dish) {
    return (
        <div className={styles.tags}>
					<div className={classNames({
						[styles.tags__types]: true,
						[styles[`tags__types__${category.label.toLowerCase()}`]]: true
					})}>{category.label}</div>
					<div className={styles.tags__portion}>{size}g</div>
					<div className={styles.tags__serving}>{serving} person{serving === 1 ? '' : 's'}</div>
					<div className={styles.tags__valor}>CHF {price.toFixed(2)}</div>
		</div>
    );
}