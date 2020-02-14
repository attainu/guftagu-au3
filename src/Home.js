import React, {useState, useEffect} from 'react';
import './Home.scss';
import Profile from './components/profile/Profile';
import SearchContacts from './SearchContacts';
import LandingPage from './LandingPage';
import {Route, Redirect} from 'react-router-dom';

const Home = (props) => {

    const [className, setClassName] = useState('')


    const addClass = (addClass) => {
        setClassName(addClass)

    }
    
    return (<div className='homepage'>
        <div className={`sidebar px-0 + ${className}`}>
            <Route exact path='/home' component={SearchContacts}></Route>
            <Route exact path='/home/profile' component={Profile}></Route>     
        </div> 
        <LandingPage addClass={addClass}/>           
    </div>)

}


export default Home