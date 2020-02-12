import React from 'react'; 
import Toolbar from '../Toolbar';
import ChatHistory from '../ChatHistory';



const ChatPanel = (props) => {
    return (
    <div className='content w-100'>
        <Toolbar img={props.img} username={props.username} display='d-none' />
        <ChatHistory/>
        <input/>
    </div>)

}

export default ChatPanel
