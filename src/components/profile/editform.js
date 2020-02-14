import React,{useState,useEffect} from 'react'

const EditForm = (props) => {
    const[user,setUser]=useState(props.currentUser)


    const handleInputChange=e=>{
        const {name,value}=e.target
        setUser({...user,[name]:value})
    }
    const onSubmit=e=>{
        e.preventDefault()
        props.updateUser(user)
    }
    return (
        <div>
            <form onSubmit={onSubmit} onChange={handleInputChange}>
                <input type="text" value={user.username} required/>
                <button>update</button>
                <button onClick={()=>props.setEditing(false)} className="button muted-button"></button>
            </form>
        </div>
    )
}

export default EditForm