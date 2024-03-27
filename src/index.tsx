import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import Menu from './pages/Cardapio';

ReactDOM.render(
	<React.StrictMode>
		<Menu />
	</React.StrictMode>,
	document.getElementById('root')
);
