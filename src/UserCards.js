import React from 'react';
import './UserCards.scss';


const UserCards = (props) => {
    console.log("inside user cards:", props.results)
    return (
    <div className='w-100 user-cards'>
        <ul class="list-group list-group-flush">
            <li className="list-group-item"><p className='mb-0'>CHATS</p></li>
        </ul>
        <ul class="list-group list-group-flush">
            {props.results.length!==0
            ? 
            props.results.map((result, key) => {
                return (
                <li key={result.email} className="list-group-item">
                    <img className='mr-5' src={result.img}/>
                    <p>{result.username}</p>
                </li>) 
            })
            : 
            <li className="mt-4 list-unstyled text-center text-secondary">No users found</li>
            }
        </ul>
    </div>

    )
}

export default UserCards


