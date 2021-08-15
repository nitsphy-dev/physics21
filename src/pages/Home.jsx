//* React Imports
import { useEffect } from 'react';

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

	return (
		<main id='home'>
			<div id='title'>
				<h1>DEPARTMENT OF PHYSICS</h1>
				<h2>NATIONAL INSTITUTE OF TECHNOLOGY, SILCHAR</h2>
			</div>

			<Carousel imgs={['carouselHome1.jpg', 'carouselHome2.jpg']} />

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
		</main>
	);
};

export default Home;
