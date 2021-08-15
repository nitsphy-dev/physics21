//* React
import { useEffect } from 'react';

//* CSS
import './css/Msc.scss';

const Msc = props => {
	//! Page Title
	useEffect(() => {
		document.title = props.title;
	}, [props.title]);

	return <main className='msc'>Msc</main>;
};

export default Msc;
