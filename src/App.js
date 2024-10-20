import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import Recipe from './pages/Recipe';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Categories from './pages/Categories';
import SearchByCategory from './pages/SearchByCategory';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/search/' element={<Search />} />
				<Route
					exact
					path=':categoryId'
					element={<SearchByCategory />}
				/>
				<Route path='/recipe/:id' element={<Recipe />} />
				<Route path='/categories' element={<Categories />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
