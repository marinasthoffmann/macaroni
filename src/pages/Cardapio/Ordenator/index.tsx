import styles from './Ordenator.module.scss';
import options from './options.json';
import React, { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props { 
  ordenator: string,
  setOrdenator: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenator({
	ordenator,
	setOrdenator
}: Props) {
	const [open, setOpen] = useState(false);
	const ordenatorName = ordenator && options.find(option => option.value === ordenator)?.name;
	return (
		<button
			className={classNames({
				[styles.ordenator]: true,
				[styles['ordenator--active']]: ordenator !== ''
			})}
			onClick={() => setOpen(!open)}
			onBlur={() => setOpen(false)}
		>
			<span>{ordenatorName || 'Ordenate by'}</span>
			{open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> }
			<div className={classNames({
				[styles.ordenator__options]: true,
				[styles['ordenator__options--active']]: open
			})}>
				{options.map(option => (
					<div className={styles.ordenator__option} key={option.value} onClick={() => setOrdenator(option.value)}>
						{option.name}
					</div>
				))}
			</div>
		</button>
	);
}