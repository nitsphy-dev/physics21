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
					<span className='navbar-itm scrl-top drpdwn'>
						<span className='drpdwn-title'>
							People&ensp;<i className='fas fa-chevron-down'></i>
						</span>
						<div className='drpdwn-menu'>
							<Link to='/people/faculty' className='drpdwn-itm'>
								Faculty
							</Link>
							<Link to='/people/non-teaching-staff' className='drpdwn-itm'>
								Non-Teaching Staff
							</Link>
							<Link to='/people/phd-scholars' className='drpdwn-itm'>
								Ph.D. Scholars
							</Link>
							<Link to='/people/msc-scholars' className='drpdwn-itm'>
								M.Sc. Students
							</Link>
							<Link to='/people/alumni' className='drpdwn-itm'>
								Alumni
							</Link>
							<Link to='/people/dev-team' className='drpdwn-itm'>
								Dev Team
							</Link>
						</div>
					</span>

					<span className='navbar-itm scrl-top drpdwn'>
						<span className='drpdwn-title'>
							Programs&ensp;<i className='fas fa-chevron-down'></i>
						</span>
						<div className='drpdwn-menu'>
							<Link to='/programs/phd' className='drpdwn-itm'>
								Doctoral Programs
							</Link>
							<Link to='/programs/msc' className='drpdwn-itm'>
								Postgraduate Programs
							</Link>
							<Link to='/programs/btech' className='drpdwn-itm'>
								Bachelor Programs
							</Link>
						</div>
					</span>

					<span className='navbar-itm scrl-top drpdwn'>
						<span className='drpdwn-title'>
							Research&ensp;<i className='fas fa-chevron-down'></i>
						</span>
						<div className='drpdwn-menu'>
							<Link to='/research/areas' className='drpdwn-itm'>
								Research Areas
							</Link>
							<Link to='/research/facilities' className='drpdwn-itm'>
								R&D Facilities
							</Link>
							<Link to='/research/projects' className='drpdwn-itm'>
								Sponsored Projects
							</Link>
							<Link to='/research/publications' className='drpdwn-itm'>
								Publications
							</Link>
							<Link to='/research/phd-thesis' className='drpdwn-itm'>
								Ph.D. Thesis
							</Link>
						</div>
					</span>

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
