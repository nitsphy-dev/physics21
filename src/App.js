import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from './comp/Navbar';
import Error404 from './comp/Error404';
import Loading from './comp/Loading';

import './App.css';

const Home = lazy(() => import('./Home'));
const Footer = lazy(() => import('./comp/Footer'));

function App() {
	return (
    <Suspense fallback={<Loading />}>
			<Router>
				<div className='App'>
					<Navbar />

					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>

						<Route path='/'>
							<Error404 />
						</Route>
					</Switch>

					<Footer />
				</div>
			</Router>
		</Suspense>
	);
}

export default App;
