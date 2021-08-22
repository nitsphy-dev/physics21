import './css/Footer.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='logo'>
				<img src='/img/nitslogo.png' alt='NITS' />
			</div>
			<div className='links'>
				<a
					href='http://nits.ac.in/contactus.php'
					className='link'
					target='_blank'
					rel='noreferrer'>
					Contact
				</a>{' '}
				|{' '}
				<a
					href='http://nits.ac.in/legal_disclaimer.php'
					className='link'
					target='_blank'
					rel='noreferrer'>
					Legal Disclaimer
				</a>{' '}
				|{' '}
				<a
					href='http://nits.ac.in/terms_and_conditions.php'
					className='link'
					target='_blank'
					rel='noreferrer'>
					Terms & Conditions
				</a>{' '}
				|{' '}
				<a
					href='http://nits.ac.in/admin_new17/faculty_login.php'
					className='link'
					target='_blank'
					rel='noreferrer'>
					Login (Faculty Profile)
				</a>
				<br />
				<br />
				<a
					href='http://nits.ac.in/acts/NIT_Act_2007.pdf'
					className='link'
					target='_blank'
					rel='noreferrer'>
					NIT Act-2007
				</a>{' '}
				|{' '}
				<a
					href='http://nits.ac.in/acts/NIT_Act_2007.pdf'
					className='link'
					target='_blank'
					rel='noreferrer'>
					Gazette Notification NIT (Amendment) Act-2012
				</a>{' '}
				|{' '}
				<a
					href='http://nits.ac.in/acts/First_Statutes_NIT_Act_2007.pdf'
					className='link'
					target='_blank'
					rel='noreferrer'>
					First Statutes under NIT Act-2007
				</a>
				<br />
				<br />
				<a
					href='mailto:someone@example.com'
					className='link'
					target='_blank'
					rel='noreferrer'>
					Mail at website@nits.ac.in for website related works
				</a>{' '}
				|{' '}
				<a
					href='http://nits.ac.in/complaintwebpage.php'
					className='link'
					target='_blank'
					rel='noreferrer'>
					Complaint WebPage of NIT Silchar
				</a>
			</div>
			<div className='copyright'>
				© Copyright 2015. All rights reserved to National Institute of
				Technology, Silchar, Assam, India.
			</div>
		</footer>
	);
};

export default Footer;
