import React, {useState, useEffect} from 'react';
import './Search.scss';
import Toolbar from '../Toolbar';
import {connect} from 'react-redux';
import SearchResult from '../SearchResult';
const fetch = require('../../api')

// no need to pass search results to parent
const SearchContacts = (props) => {
    const [state, setState] = useState({input:'', id:'', user:{}})

    useEffect(()=>{
        let user = sessionStorage.getItem('login')
        console.log(user)
        if(user){
            setState(Object.assign({}, state, {user:JSON.parse(user)}))
        }

    }, [])

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
        
        <div className='search'>
            <Toolbar redirectTo='/home/profile' img={state.user && state.user.img}/>
            <div className='searchbox'>
                <img className='ml-2 mr-3' id='search-icon' src='https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png'></img>
                <input onChange={(e)=> onChange(e)} className='input-contact mb-0 pl-5' value={state.input} type='text' placeholder='           Search or start new chat'></input>
            </div>

            {typeof(props.search)==='object'
            ?
            <SearchResult results={props.search}/>
            :
            <div></div>}

            


        </div>
    )

}

const stateMap = (state) => {
    return {
        search: state.search
    }

}



export default connect(stateMap)(SearchContacts)
