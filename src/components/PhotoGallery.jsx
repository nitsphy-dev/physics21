//* CSS
import './css/PhotoGallery.scss';

//* Function Component
const PhotoGallery = props => {
	const imgs = props.imgs;

	return (
		<div className='photo-gallery'>
			{imgs.map(img => (
				<div className='photo-gallery-itm' key={img}>
					<img
						src={img}
						loading='lazy'
						onClick={() => {
							window.open(img, '_blank');
						}}
						alt='Img not supported'
					/>
				</div>
			))}
		</div>
	);
};

export default PhotoGallery;
