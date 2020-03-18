import React, {useState} from 'react';
import './Profile.scss';
import {FaSignOutAlt} from 'react-icons/fa'
import {Link,useHistory} from 'react-router-dom'
import ProfilePicture  from './ProfilePicture';
import Username from './Username'

const Profile =()=>{
    const history=useHistory();

    const [login] = useState(sessionStorage.getItem('login')? JSON.parse(sessionStorage.getItem('login')):null)
    
    const logout=()=>{
        sessionStorage.clear("login")
        setTimeout(()=>{
            history.push("/login")
        },2000)
    }


//profile pic edit and upload
    return(
        <div className='profile h-100 w-100'>
            <div className='header py-3 pl-5'>
                <h6><Link className='text-white' to='/home'>{`<-`}</Link></h6>
                <h6 className='text-white ml-5'>Profile</h6>
                <Link><FaSignOutAlt id="logout" onClick={logout}/></Link>
            </div>
            <div>
                    <ProfilePicture className="pic" propic={login.img} logout={logout}/>
            </div>
{/*Username edit and update*/}
            <div className="card">
            <h5 id="Name">Your Name</h5><br/>
                <Username userData={login.username} history={history} logout={logout}/>
            </div>
            <small>This is your username.This will be visible to your contacts</small>
        </div>
    )
}

export default Profile