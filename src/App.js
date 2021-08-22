import React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Error404 from './pages/Error404';
import Loading from './components/Loading';

import './App.css';

const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Faculty = lazy(() => import('./pages/Faculty'));
const NonTeachingStaff = lazy(() => import('./pages/NonTeachingStaff'));
const PhdScholars = lazy(() => import('./pages/PhdScholars'));
const MscScholars = lazy(() => import('./pages/MscScholars'));
const Alumni = lazy(() => import('./pages/Alumni'));
const DevTeam = lazy(() => import('./pages/DevTeam'));
const Phd = lazy(() => import('./pages/Phd'));
const Msc = lazy(() => import('./pages/Msc'));
const Btech = lazy(() => import('./pages/Btech'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ReachUs = lazy(() => import('./pages/ReachUs'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Router>
				<div className='App'>
					<Navbar />

					<Switch>
						<Route exact path='/'>
							<Home title='Deptartment of Physics | NIT Silchar' />
						</Route>

						<Route exact path='/about-us'>
							<AboutUs title='About Us - Physics Dept. | NIT Silchar' />
						</Route>

						<Route exact path='/admissions'>
							<Admissions title='Admissions - Physics Dept. | NIT Silchar' />
						</Route>

						<Route exact path='/people/faculty'>
							<Faculty title='Faculty - Physics Dept. | NIT Silchar' />
						</Route>

						<Route exact path='/people/non-teaching-staff'>
							<NonTeachingStaff title='Non-Teaching Staff - Physics Dept. | NIT Silchar' />
						</Route>

						<Route exact path='/people/phd-scholars'>
							<PhdScholars title='Ph.D Scholars - Physics Dept. | NIT Silchar' />
						</Route>

						<Route exact path='/people/msc-scholars'>
							<MscScholars title='M.Sc. Scholars - Physics Dept. | NIT Silchar' />
						</Route>

						<Route exact path='/people/alumni'>
							<Alumni title='Alumni - Physics Dept. | NIT Silchar' />
						</Route>

						<Route exact path='/people/dev-team'>
							<DevTeam title='Dev Team - Physics Dept. | NIT Silchar' />
						</Route>

						<Route exact path='/programs/phd'>
							<Phd title='Ph. D. - Physics Dept. | NIT Silchar' />
						</Route>

						<Route exact path='/programs/msc'>
							<Msc title='M. Sc. - Physics Dept. | NIT Silchar' />
						</Route>

						<Route exact path='/programs/btech'>
							<Btech title='B. Tech. - Physics Dept. | NIT Silchar' />
						</Route>

						<Route exact path='/gallery'>
							<Gallery title='Gallery - Physics Dept. | NIT Silchar' />
						</Route>

						<Route exact path='/reach-us'>
							<ReachUs title='Reach Us - Physics Dept. | NIT Silchar' />
						</Route>

						<Route path='/'>
							<Error404 title='Error404 - Physics Dept. | NIT Silchar' />
						</Route>
					</Switch>
					<Footer />
				</div>
			</Router>
		</Suspense>
	);
}

export default App;
