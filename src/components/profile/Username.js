import React,{useState,Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Alert} from 'react-bootstrap';
import {FaPen,FaTimes,FaCheck} from 'react-icons/fa';
const fetch=require('../../api');


const Username=(props)=>{

    const [editing,setEditing]=useState(false)
    const [user,setUser]=useState({username:''})
    const [success,setSuccess]=useState({isSuccess:false,message:""})

const onSubmit = (e) => {
    let data = {}
    let username =''
    if(e.target && e.target.nodeName==='FORM'){
        e.preventDefault()
        username = e.target[0].value
    }

    data = {username}
    console.log(data.username)
    fetch.editName(props,data)
    setSuccess({...success,isSuccess:true,message:"Name updated please login again"})
    setTimeout(()=>{
        props.logout()
    },2000) 
}
return(
    <>  {
        success.isSuccess && (
            <Alert variant="success">
                {success.message}
            </Alert>
        )}
        {editing?(
            <Fragment>
                <form onSubmit={onSubmit}>
                    <input  id="username"type="text" name="username"  onChange={e=>setUser({...user,username:e.target.value})} value={user.username}  required/>
                    <button id="waste"><FaCheck id="updateicon"/></button>
                    <FaTimes id="cancelicon"onClick={()=>{setEditing(false)}}/>
                </form>
            </Fragment>
    ):(
            <Fragment>
                <h5>{props.userData}</h5>
                <Link><FaPen id="editicon" onClick={()=>{setEditing(true)}}/></Link>
            </Fragment>)}
    </>
)}
export default Username;