import React from 'react';


const Toolbar = (props) => {
    return (
        <div className='toolbar px-3 w-100'>
                <img id='pic' src={props.img}></img>
                <p className='mb-0'>{props.username}</p>
            <h4 className={props.display}>:</h4>
        </div>
    )
}

export default Toolbar