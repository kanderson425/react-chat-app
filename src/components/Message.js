import React from 'react';
import '../style.css';

 function Message(props)  {
        return (
            <div className="message">
                <div className="message-username">{props.username}</div>
                <div className="message-text">{props.text}</div>
            </div>
        )
}

export default Message;
