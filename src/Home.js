import React, {useState, useEffect} from 'react';
import './Home.scss';
import Profile from './Profile';
import SearchContacts from './SearchContacts';
import {Route} from 'react-router-dom';

const Home = (props) => {
    return (<div className='homepage'>
        <div className='sidebar px-0'>
            <Route exact path='/home' component={SearchContacts}></Route>
            <Route path='/home/profile' component={Profile}></Route>     
        </div>
        <div className='main'>
            <img id='phone' src='https://previews.123rf.com/images/cosmaa/cosmaa1805/cosmaa180500015/100729800-cartoon-illustration-of-phone-notification-alarm-and-police-flasher-on-phone-display-hand-holding-sm.jpg'></img>
            <h1 className='text-secondary mt-3'>Keep your phone connected</h1>
            <p className='text-secondary'>Talk to your friends, here, everywhere.</p>

        </div>

    </div>)

}


export default Home