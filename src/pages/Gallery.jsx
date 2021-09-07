//* React Imports
import React, { useState, useEffect } from 'react';

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

	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('/db/gallery.json')
			.then(response => response.json())
			.then(res => {
				setData(res);
			});
	}, []);

	return (
		<main className='gallery'>
			<div className='heading title'>Outreach Activities</div>
			{data && <Carousel imgs={data.carousel} />}

			{data &&
				data.gallery.map((album, albumIndex) => (
					<React.Fragment key={albumIndex}>
						<div className='heading'>{album.title}</div>
						<PhotoGallery imgs={album.imgs} />
					</React.Fragment>
				))}
		</main>
	);
};

export default Gallery;
