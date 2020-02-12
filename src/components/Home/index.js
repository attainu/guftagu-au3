import React, {useState, useEffect} from 'react';
import './Home.scss';
import Profile from '../Profile';
import Search from '../Search';
import RightPanel from '../RightPanel';
import {Route, Redirect} from 'react-router-dom';

const Home = (props) => {

    const [className, setClassName] = useState('')


    const addClass = (addClass) => {
        setClassName(addClass)

    }
    
    return (<div className='home'>
        <div className={`sidebar px-0 + ${className}`}>
            <Route exact path='/home' component={Search}></Route>
            <Route exact path='/home/profile' component={Profile}></Route>     
        </div> 
        <RightPanel addClass={addClass}/>           
    </div>)

}


export default Home
