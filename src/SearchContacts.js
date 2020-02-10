import React, {useState, useEffect} from 'react';
import './SearchContacts.scss';
import {Link} from 'react-router-dom'

// no need to pass search results to parent
const SearchContacts = (props) => {
    const []
    return (
        <div className='search-contacts'>
            <div className='toolbar px-3'>
                <Link to='/home/profile'>
                    <img id='pic' src='https://www.w3schools.com/howto/img_avatar2.png'></img>
                </Link>
                <h4>:</h4>
            </div>
            <div className='search'>
                <img className='ml-2 mr-3' id='search' src='https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png'></img>
                <input className='input-contact mb-0' type='text' placeholder='           Search or start new chat'></input>
            </div>


        </div>
    )

}


export default SearchContacts