//* React Imports
import { useState } from 'react';

//* CSS
import './css/Carousel.scss';

//* Functional Component
const Carousel = props => {
	const imgs = props.imgs;

	const [clickIndex, setClickIndex] = useState(0);
	return (
		<div className='carousel'>
			<div
				className='btn left'
				onClick={() => {
					setClickIndex(i => {
						if (i != 0) return --i % imgs.length;
						else return imgs.length - 1;
					});
				}}>
				<i className='fas fa-chevron-left' />
			</div>
			<div className='img'>
				<img src={imgs[clickIndex]} alt='Img not supported' />
			</div>
			<div
				className='btn right'
				onClick={() => {
					setClickIndex(i => {
						return ++i % imgs.length;
					});
				}}>
				<i className='fas fa-chevron-right' />
			</div>
			<div className='tracker'>
				{imgs.map((img, imgIndex) => (
					<div
						key={imgIndex}
						className={`tracker-itm${
							imgIndex === clickIndex ? ` tracker-highlight` : ``
						}`}></div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
