import React, {useState, useEffect} from 'react';
import './SearchContacts.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
const fetch = require('./api')

// no need to pass search results to parent
const SearchContacts = (props) => {
    const [state, setState] = useState({input:'', id:''})

    useEffect(()=>{
        console.log(props.login, "props login effect")

    }, [props])

    const onChange = (e) => {
        console.log("inside onchange")
        // if empty, then do nothing
        if(!e.target.value)
            return
        // set-time-out on every keyup
        // and clear the prev one
        // so store the id in state?
        clearInterval(state.id)
        let id = setTimeout(() => fetch.search(props, state.input), 1000)
        setState(Object.assign({}, state, {input: e.target.value, id}))

    }


    return (
        <div className='search-contacts'>
            <div className='toolbar px-3'>
                <Link to='/home/profile'>
                    <img id='pic' src={props.login && props.login.img}></img>
                </Link>
                <h4>:</h4>
            </div>
            <div className='search'>
                <img className='ml-2 mr-3' id='search' src='https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png'></img>
                <input onChange={(e)=> onChange(e)} className='input-contact mb-0' value={state.input} type='text' placeholder='           Search or start new chat'></input>
            </div>


        </div>
    )

}

const stateMap = (state) => {
    return {
        search: state.search, 
        login: state.login
    }

}



export default connect(stateMap)(SearchContacts)