//* CSS
import "./css/Message.scss";

//* Functional Component
const Message = (props) => {
  let head = props.head;

  return (
    <div className="message">
      <div className="heading">Message From The HOD</div>
      <div className="head">
        <div className="head-img">
          <img src={head.img} alt="Img not supported"></img>
        </div>
        <div className="name">{head.name}</div>
        <div className="title">{head.title}</div>
        <div className="phone">Phone: {head.phone}</div>
        <div className="mail">Mail : {head.mail}</div>
      </div>
      <div className="msg">{props.msg}</div>
    </div>
  );
};

export default Message;
