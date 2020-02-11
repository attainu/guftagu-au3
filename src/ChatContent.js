import React from 'react'; 
import Toolbar from './Toolbar';
import DisplayChat from './DisplayChat';
import Chatbox from './Chatbox';


const ChatContent = (props) => {
    return (
    <div className='content w-100'>
        <Toolbar img={props.img} username={props.username} display='d-none' />
        <DisplayChat/>
        <Chatbox/>
    </div>)

}

export default ChatContent