import React, { useEffect } from 'react'; 
import ChatContent from './ChatContent.js';
import {connect} from 'react-redux';
import HomeWallpaper from './HomeWallpaper';


const LandingPage = (props) => {

    useEffect(()=>{
        if(props.selectedChat){
            props.addClass('user-selected-sidebar')
        }
    })
    return (
    
    <>
    {props.selectedChat
    ?
    <ChatContent img={props.selectedChat.img} username={props.selectedChat.username} />
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