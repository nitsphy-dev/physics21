//* React Imports
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//* CSS Imports
import './css/Navbar.scss';

//* React Component
const Navbar = () => {
	const [mobNav, setMobNav] = useState(false);

	useEffect(() => {
		if (window.innerWidth >= 500) setMobNav(true);
	}, [mobNav]);

	return (
		<header className='navbar'>
			{/* Logo */}
			<Link className='navbar-logo' to='/'>
				<img src='/img/nitslogo.png' alt='Img not supported' />
			</Link>

			{/* Mobile Menu */}
			<div className='mob-menu'>
				{!mobNav && (
					<div
						className='mob-menu-itm'
						id='open'
						onClick={() => {
							setMobNav(true);
							document.body.style.height = '100vh';
							document.body.style.overflow = 'hidden';
						}}>
						<i className='fas fa-bars'></i>
					</div>
				)}
				{mobNav && (
					<div
						className='mob-menu-itm'
						id='close'
						onClick={() => {
							setMobNav(false);
							document.body.style.height = 'auto';
							document.body.style.overflow = 'scroll';
						}}>
						<i className='fas fa-times'></i>
					</div>
				)}
			</div>

			{/* Navbar Items */}
			{mobNav && (
				<div className='navbar-itm-ctnr'>
					<Link to='/' className='navbar-itm scrl-top'>
						Home
					</Link>
					<Link to='/about-us' className='navbar-itm scrl-top'>
						About Us
					</Link>
					<Link to='/admissions' className='navbar-itm scrl-top'>
						Admissions
					</Link>

					{/* Navbar Dropdown */}
					<button className='navbar-itm drpdwn'>
						<span className='drpdwn-title'>
							People&ensp;<i className='fas fa-chevron-down'></i>
						</span>
						<div className='drpdwn-menu'>
							<Link to='/people/faculty' className='drpdwn-itm scrl-top'>
								Faculty
							</Link>
							<Link
								to='/people/non-teaching-staff'
								className='drpdwn-itm scrl-top'>
								Non-Teaching Staff
							</Link>
							<Link to='/people/phd-scholars' className='drpdwn-itm scrl-top'>
								Ph.D. Scholars
							</Link>
							<Link to='/people/msc-scholars' className='drpdwn-itm scrl-top'>
								M.Sc. Students
							</Link>
							<Link to='/people/alumni' className='drpdwn-itm scrl-top'>
								Alumni
							</Link>
							<Link to='/people/dev-team' className='drpdwn-itm scrl-top'>
								Dev Team
							</Link>
						</div>
					</button>

					<button className='navbar-itm drpdwn'>
						<span className='drpdwn-title'>
							Programs&ensp;<i className='fas fa-chevron-down'></i>
						</span>
						<div className='drpdwn-menu'>
							<Link to='/programs/phd' className='drpdwn-itm scrl-top'>
								Doctoral Programs
							</Link>
							<Link to='/programs/msc' className='drpdwn-itm scrl-top'>
								Postgraduate Programs
							</Link>
							<Link to='/programs/btech' className='drpdwn-itm scrl-top'>
								Bachelor Programs
							</Link>
						</div>
					</button>

					<button className='navbar-itm drpdwn'>
						<span className='drpdwn-title'>
							Research&ensp;<i className='fas fa-chevron-down'></i>
						</span>

						<div className='drpdwn-menu'>
							<Link to='/research/areas' className='drpdwn-itm scrl-top'>
								Research Areas
							</Link>
							<Link to='/research/facilities' className='drpdwn-itm scrl-top'>
								R&D Facilities
							</Link>
							<Link to='/research/projects' className='drpdwn-itm scrl-top'>
								Sponsored Projects
							</Link>
							<Link to='/research/publications' className='drpdwn-itm scrl-top'>
								Publications
							</Link>
							<Link to='/research/phd-thesis' className='drpdwn-itm scrl-top'>
								Ph.D. Thesis
							</Link>
						</div>
					</button>

					<Link to='/downloads' className='navbar-itm scrl-top'>
						Downloads
					</Link>

					<Link to='/gallery' className='navbar-itm scrl-top'>
						Gallery
					</Link>

					<Link to='/reach-us' className='navbar-itm scrl-top'>
						Reach Us
					</Link>
				</div>
			)}
		</header>
	);
};

export default Navbar;
