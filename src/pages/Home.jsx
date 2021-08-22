//* React Imports
import React, { useState, useEffect } from 'react';

//* Module Imports
import Carousel from '../components/Carousel';
import Message from '../components/Message';

//* CSS Imports
import './css/Home.scss';

//* React Component
const Home = props => {
	//! Page Title
	useEffect(() => {
		document.title = props.title;
	}, [props.title]);

	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('/db/home.json')
			.then(response => response.json())
			.then(res => {
				setData(res);
			});
	}, []);

	return (
		<main id='home'>
			<div id='title'>
				<div className='logo'>
					<img src='/img/logofinal.png'></img>
				</div>
				<div className='text'>
					<h1>DEPARTMENT OF PHYSICS</h1>
					<h2>NATIONAL INSTITUTE OF TECHNOLOGY, SILCHAR</h2>
				</div>
			</div>

			<Carousel imgs={['/img/carouselHome1.jpg', '/img/carouselHome2.jpg']} />

			<div className='about-dept'>
				<div className='heading'>About The Department Of Physics</div>
				<div className='about-msg'>
					The Department of Physics is actively involved in the research in the
					emerging areas of science and technology. Since its inception, the
					department of physics has provided both basic and engineering-oriented
					physics theory and practical courses for the B. Tech 1st year
					students. Presently, M.Sc. and Ph.D. programme are also going on in
					the department. Broad areas of expertise available in the department
					are Solid State Gas Sensors, Carrier Transport in Thin Films,
					Ferroelectrics and related materials, Multiferroics, Solar Energy
					Materials, Liquid Crystals, Semiconductor Nanostructure and Devices,
					Polymer Nanocomposites, Solar Photocatalysis, Solar Energy Materials,
					Energy storage devices and materials, Nanoionics based resistive
					switching devices, Theoretical Physics, Theoretical Nuclear and
					Particle Physics, etc.
				</div>
			</div>

			<Message
				msg={`
				The Department of Physics is actively involved in the research in the emerging areas of science and technology. Since its inception, the department of physics has provided both basic and engineering-oriented physics theory and practical courses for the B. Tech 1st year students. Presently, M.Sc. and Ph.D. programme are also going on in the department. Broad areas of expertise available in the department are Solid State Gas Sensors, Carrier Transport in Thin Films, Ferroelectrics and related materials, Multiferroics, Solar Energy Materials, Liquid Crystals, Semiconductor Nanostructure and Devices, Polymer Nanocomposites, Solar Photocatalysis, Solar Energy Materials, Energy storage devices and materials, Nanoionics based resistive switching devices, Theoretical Physics, Theoretical Nuclear and Particle Physics, etc.
				`}
				head={{
					img: '/img/headImg.jpg',
					name: 'Dr. Subhashis Panda',
					title: 'Head, Department of Physics',
					phone: '8399920286',
					mail: 'hod@phy.nits.ac.in',
				}}
			/>

			<div className='latest'>
				<div className='updates'>
					<div className='heading'>News and Updates</div>
					{data &&
						data.updates.map((update, updateIndex) => (
							<React.Fragment key={updateIndex}>
								<a href={update.link}>
									<i className='fas fa-bullseye'></i>{' '}
									{update.new && <div>NEW</div>} {update.text}
								</a>
								<br />
								<br />
							</React.Fragment>
						))}
				</div>
				<div className='events'>
					<div className='heading'>Events</div>
					{data &&
						data.events.map((event, eventIndex) => (
							<React.Fragment key={eventIndex}>
								<a href={event.link}>
									<i className='fas fa-bullseye'></i>{' '}
									{event.new && <div>NEW</div>} {event.text}
								</a>
								<br />
								<br />
							</React.Fragment>
						))}
				</div>
			</div>
		</main>
	);
};

export default Home;
