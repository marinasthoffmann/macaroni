import styles from './Menu.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import { useState } from 'react';
import Items from './Itens';
import Searcher from './Searcher';
import Filters from './Filters';
import Ordenator from './Ordenator';

export default function Menu() {
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState<number | null>(null);
	const [ordenator, setOrdenator] = useState('');
	return (	
		<section className={stylesTheme.title}>
			<h3 className={styles.cardapio__titulo}>Menu</h3>
			<Searcher search={search} setSearch={setSearch} />
			<div className={styles.cardapio__filtros}>
				<Filters filter={filter} setFilter={setFilter} />
				<Ordenator ordenator={ordenator} setOrdenator={setOrdenator} />
			</div>
			<Items search={search} filter={filter} ordenator={ordenator} />
		</section>
	);
}