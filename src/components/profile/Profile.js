import React, {useState, useEffect, Fragment} from 'react';
import './Profile.scss';
import {FaPen} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import FileUpload from './FileUpload'
import EditForm from './editform'



const Profile = (props) => {
    const [users, setUsers] = useState({user:{}})
    const [currentUser,setCurrentUser]=useState(users)
    const [editing,setEditing]=useState(false)



    useEffect(()=>{
        let user = sessionStorage.getItem('login')
        console.log(user)
        if(user){
            setUsers(Object.assign({}, users, {user:JSON.parse(user)}))
        }
    
    }, [props])

    const updateUser=(updatedUser)=>{
        setEditing(false)
        setUsers()
    }
    const edit = user => {
        setEditing(true)
        setCurrentUser({username:user.username})
    }
    return (
    <div className='profile h-100 w-100'>
        <div className='header py-3 pl-5'>
            <h6><Link className='text-white' to='/home'>{`<-`}</Link></h6>
            <h6 className='text-white ml-5'>Profile</h6>
        </div>
        <div>
            <FileUpload/>
        </div>
        {/* <img></img> */}
        <div className="card">
            <h5 id="Name">Your Name</h5><br/>
            {editing?(<Fragment>
                <EditForm editing={editing} setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>
            </Fragment>):(
                <Fragment>
                 <h5>{users.user.username}</h5>
                    <FaPen id="icon" onclick={()=>edit={edit}}/>
                </Fragment>
            )
                   
                
            }
                   
        </div>
        <small>This is your username.This will be visible to your contacts</small>
        
        </div>
        )
}


export default Profile