//* React Imports
import React, { useEffect } from 'react';

//* Module Imports
import Carousel from '../components/Carousel';
import PhotoGallery from '../components/PhotoGallery';

//* CSS Imports
import './css/Gallery.scss';

//* React Component
const Gallery = props => {
	//! Page Title
	useEffect(() => {
		document.title = props.title;
	}, [props.title]);

	return (
		<main className='gallery'>
			<div className='heading title'>Outreach Activities</div>
			<Carousel
				imgs={[
					'/img/nsd2020/header/1.jpg',
					'/img/nsd2020/header/2.jpg',
					'/img/nsd2020/header/3.jpg',
					'/img/nsd2020/header/4.jpg',
					'/img/nsd2020/header/5.jpg',
					'/img/nsd2020/header/6.jpg',
				]}
			/>

			<div className='heading'>National Science Day 2020</div>
			<PhotoGallery
				imgs={[
					'/img/nsd2020/body/1.jpg',
					'/img/nsd2020/body/2.jpg',
					'/img/nsd2020/body/3.jpg',
					'/img/nsd2020/body/4.jpg',
					'/img/nsd2020/body/5.jpg',
					'/img/nsd2020/body/6.jpg',
					'/img/nsd2020/body/7.jpg',
					'/img/nsd2020/body/8.jpg',
					'/img/nsd2020/body/9.jpg',
					'/img/nsd2020/body/10.jpg',
					'/img/nsd2020/body/11.jpg',
					'/img/nsd2020/body/12.jpg',
					'/img/nsd2020/body/13.jpg',
					'/img/nsd2020/body/14.jpg',
					'/img/nsd2020/body/15.jpg',
					'/img/nsd2020/body/16.jpg',
				]}
			/>
		</main>
	);
};

export default Gallery;
