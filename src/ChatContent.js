import React from 'react'; 
import Toolbar from './Toolbar';


const ChatContent = (props) => {
    return (
    <div className='content w-100'>
        <Toolbar img={props.img} username={props.username} display='d-none' />
        <p className='text-secondary'>chat page</p>
    </div>)

}

export default ChatContent