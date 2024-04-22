import Footer from 'components/Footer';
import Navbar from 'components/NavBar';
import StandardPage from 'components/StandardPage';
import About from 'pages/About';
import Menu from 'pages/Cardapio';
import Dish from 'pages/Dish';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<StandardPage />}>
						<Route index element={<Home />} />
						<Route path='menu' element={<Menu />}/>
						<Route path='about' element={<About />}/>		
					</Route>
					<Route path='dish/:id' element={<Dish />} />				
					<Route path='*' element={<NotFound />} />					
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}