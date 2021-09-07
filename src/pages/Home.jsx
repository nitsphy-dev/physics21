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

	console.log(data);

	return (
		<main id='home'>
			<div id='title'>
				<div className='logo'>
					<img src='/img/logofinal.png' alt='NITS'></img>
				</div>
				<div className='text'>
					<h1>DEPARTMENT OF PHYSICS</h1>
					<h2>NATIONAL INSTITUTE OF TECHNOLOGY, SILCHAR</h2>
					<h3>राष्ट्रीय प्रौद्योगिकी संस्थान सिलचर</h3>
				</div>
			</div>

			{data && <Carousel imgs={data.images} />}

			<div className='about-dept'>
				<div className='heading'>About The Department Of Physics</div>
				<div className='about-msg'>{data && data.aboutDept}</div>
			</div>

			{data && (
				<Message
					msg={data.hod.message.map((para, paraIndex) => (
						<React.Fragment key={paraIndex}>
							{para}
							<br />
							<br />
						</React.Fragment>
					))}
					head={{
						img: data.hod.img,
						name: data.hod.name,
						title: data.hod.title,
						phone: data.hod.phone,
						mail: data.hod.mail,
					}}
				/>
			)}

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
