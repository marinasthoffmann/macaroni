import React from 'react';
import filtros from './filters.json';
import styles from './Filters.module.scss';
import classNames from 'classnames';

type IOpcao = typeof filtros[0];

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({ filter, setFilter }: Props) {

	function selectFilter(opcao: IOpcao) {
		if (filter === opcao.id) return setFilter(null);
		return setFilter(opcao.id);
	}
	return (
		<div className={styles.filters}>
			{filtros.map(opcao => (
				<button className={classNames({
					[styles.filters__filter]: true,
					[styles['filters__filter--active']]: filter === opcao.id
				})} key={opcao.id} onClick={() => selectFilter(opcao)}>
					{opcao.label}
				</button>
			))}
		</div>
	);
}