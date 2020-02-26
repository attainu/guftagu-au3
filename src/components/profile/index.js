import React, {useState, useEffect, Fragment} from 'react';
import './Profile.scss';
import {FaPen,FaTimes,FaCheck} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import FileUpload from './FileUpload';
const fetch =require('../../api')

const Profile =(props)=>{
    const [editing,setEditing]=useState(false)
    const [users,setUsers]=useState({user:{}})
    const [user,setUser]=useState({username:''})
    
    useEffect(()=>{
                let user = sessionStorage.getItem('login')
                //console.log(user)
                if(user){
                    setUsers(Object.assign({}, users, {user:JSON.parse(user)}))
                }
            
            }, [props])

      
     const onSubmit = (e) => {
        let data = {}
        let username =''
        if(e.target && e.target.nodeName==='FORM'){
            e.preventDefault()
            username = e.target[0].value
        }
    
        data = {username}
        console.log(data)
        //console.log(user.username)
        fetch.editName(props,data)
            
    }


//profile pic edit and upload
    return(
        <div className='profile h-100 w-100'>
            <div className='header py-3 pl-5'>
                <h6><Link className='text-white' to='/home'>{`<-`}</Link></h6>
                <h6 className='text-white ml-5'>Profile</h6>
            </div>
            <div>
              {editing?(
                  <Fragment>
                      <FileUpload />
                  </Fragment>
              ):(<Fragment>
                  <h4>Profile Pic</h4>
                  <img id="pic" src={users.user.img}></img>
                  <Link><FaPen id="editicon" onClick={()=>{setEditing(true)}}/></Link>
              </Fragment>)}
            </div>

{/*Username edit and update*/}
            <div className="card">
            <h5 id="Name">Your Name</h5><br/>
            {editing?(
            <Fragment>
             <form onSubmit={onSubmit}>
                <input type="text" name="username"  onChange={e=>setUser({...user,username:e.target.value})} value={user.username}  required/>
                <button><FaCheck id="updateicon"/></button>
                <FaTimes id="cancelicon"onClick={()=>{setEditing(false)}}/>
             </form>
            </Fragment>
            ):(<Fragment>
                <h5>{users.user.username}</h5>
                <Link><FaPen id="editicon" onClick={()=>{setEditing(true)}}/></Link>
            </Fragment>)}
            </div>
            <small>This is your username.This will be visible to your contacts</small>
        </div>
    )
}

export default Profile