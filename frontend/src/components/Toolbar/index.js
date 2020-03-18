import React from 'react';
import {Link} from 'react-router-dom'
import './Toolbar.scss';


const Toolbar = (props) => {

    return(
    <div className='toolbar px-3 w-100'>
             <Link to="/home/profile"><img id='pic' src={props.img} alt='avatar'></img></Link>   
                <p className='mb-0 ml-3'>{props.username}</p>
            </div>
            
        
        
)}


export default Toolbar