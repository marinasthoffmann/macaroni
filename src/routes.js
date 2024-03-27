import Navbar from 'components/NavBar';
import StandardPage from 'components/StandardPage';
import Menu from 'pages/Cardapio';
import Home from 'pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
	return (
		<main>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<StandardPage />}>
						<Route index element={<Home />} />
						<Route path='menu' element={<Menu />}/>
					</Route>					
				</Routes>
			</Router>
		</main>
	);
}