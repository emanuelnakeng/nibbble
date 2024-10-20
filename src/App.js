import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Recipe from './pages/Recipe';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Tips from './pages/Tips';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/search' element={<Search />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/recipe/:id' element={<Recipe />} />
				<Route path='/tips' element={<Tips />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
