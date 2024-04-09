import Navbar from 'components/NavBar';
import StandardPage from 'components/StandardPage';
import About from 'pages/About';
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
						<Route path='about' element={<About />}/>
					</Route>					
				</Routes>
			</Router>
		</main>
	);
}