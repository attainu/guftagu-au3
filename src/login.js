import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
const fetch =  require('./api')
const NoAccount = () => {    
    return <p className='have-account py-3'>Don't have an account? <Link to='/'>Sign up</Link></p>
}
function Login(props){ 

    const [user,setUser]=useState({email:'',password:''})

     // const onChange = (e) => {​
    //     if(e.target.nodeName==='INPUT'){
    //         setUser(Object.assign({},user, {[e.target.name]:e.target.value}))​
    //     }
    // }
    const onSubmit = (e) => {
    let data = {}
    let email =''
    let password = ''
    if(e.target && e.target.nodeName==='FORM'){
        e.preventDefault()
        email = e.target[0].value
        password = e.target[1].value
    }
    else{
        email = e.profileObj.email 
        password = e.profileObj.password  
    }

    data = {email, password}
    console.log(data)
    fetch.login(props, data)
        
}


    return (
        <div className="signup-page">
            <div className='signup mb-3 px-5 py-4'>
                <h1 className='name mb-4'>Guftagu</h1>
                <hr/>
                <form className='form-group my-3' onSubmit={onSubmit}>​
                    <input name='email' value={user.email} type='text' onChange={e=>setUser({...user,email:e.target.value})} className="form-control mb-2" placeholder='email' required/>​
                    <input name='password' value={user.password} type='password' onChange={(e)=>setUser({...user,password:e.target.value})} className="form-control mb-2" placeholder='Password' required/>
                    <button className="btn btn-primary w-100 mb-3 sign-up-btn">login</button>
                </form>​
            </div>
            <div>​
                <NoAccount/>
            </div>​
        </div>)}


export default connect()(Login)
