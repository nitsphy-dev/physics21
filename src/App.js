import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from './components/Navbar';
import Error404 from './pages/Error404';
import Loading from './components/Loading';

import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
	return (
    <Suspense fallback={<Loading />}>
			<Router>
				<div className='App'>
					<Navbar />

					<Switch>
						<Route exact path='/'>
							<Home
								title="Physics Dept. | NIT Silchar"
							/>
						</Route>

						<Route path='/'>
							<Error404
								title="Error404 - Physics Dept. | NIT Silchar"
							/>
						</Route>
					</Switch>

					<Footer />
				</div>
			</Router>
		</Suspense>
	);
}

export default App;
