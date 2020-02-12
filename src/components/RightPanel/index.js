import React, { useEffect } from 'react'; 
import ChatPanel from '../ChatPanel';
import {connect} from 'react-redux';
import HomeWallpaper from '../Wallpaper';


const LandingPage = (props) => {

    useEffect(()=>{
        if(props.selectedChat){
            props.addClass('chatting-with')
        }
    })
    return (
    
    <>
    {props.selectedChat
    ?
    <ChatPanel img={props.selectedChat.img} username={props.selectedChat.username} />
    :
    <HomeWallpaper/>

    }
        
    </>)

}

const stateMap = (state) => {
    return {
        selectedChat: state.selectedChat
    }

}

export default connect(stateMap)(LandingPage)
