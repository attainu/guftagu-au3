import React from 'react';
import {connect} from 'react-redux';
import './SearchContactsContainer.scss';


const SearchContactsContainer = (props) => {
    console.log("inside user cards:", props.results)

    const onClick = e => {
        console.log(e.target)
        const {nodeName} = e.target 
        if(nodeName==='LI'){
            e.target.style.background = '#eeeeef'
            let img = e.target.children[0].src 
            let username = e.target.children[1].innerText
            let email = e.target.key
            console.log(username, img)
            props.dispatch({type:"get-chat-content-for-selected-chat", value: {img, username, email}})
        }

    }

    return (
    <div className='w-100 user-cards'>
        <ul class="list-group list-group-flush">
            <li className="list-group-item"><p className='mb-0'>CHATS</p></li>
        </ul>
        <ul onClick={onClick} class="list-group list-group-flush">
            {props.results.length!==0
            ? 
            props.results.map((result, key) => {
                return (
                    <li key={result.email} className="list-group-item">
                        <img className='mr-5' src={result.img}/>
                        <p className='mb-0'>{result.username}</p>
                    </li>
                ) 
            })
            : 
            <li className="mt-4 list-unstyled text-center text-secondary">No users found</li>
            }
        </ul>
    </div>

    )
}

const stateMapToProps = state => {

}

export default connect()(SearchContactsContainer)


