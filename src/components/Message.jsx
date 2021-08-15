//* CSS
import './css/Message.scss';

//* Functional Component
const Message = props => {
	return (
		<div className='message'>
			<div className='title'>Message From The Head</div>
			<div className='head'>
				<img src={props.head.img} alt='Img not supported'></img>
				{props.head.name}
				{props.head.title}
				{props.head.phone}
				{props.head.mail}
			</div>
			<div className='msg'>{props.msg}</div>
		</div>
	);
};

export default Message;
