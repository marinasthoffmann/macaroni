import React from 'react';
import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
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
		<main>
			<nav className={styles.menu}>
				<Logo />
			</nav>
			<header className={styles.header}>
				<div className={styles.header__text}>          
          The house of code and pasta
				</div>
			</header>
			<section className={styles.cardapio}>
				<h3 className={styles.cardapio__titulo}>Menu</h3>
				<Searcher search={search} setSearch={setSearch} />
				<div className={styles.cardapio__filtros}>
					<Filters filter={filter} setFilter={setFilter} />
					<Ordenator ordenator={ordenator} setOrdenator={setOrdenator} />
				</div>
				<Items search={search} filter={filter} ordenator={ordenator} />
			</section>
		</main>
	);
}