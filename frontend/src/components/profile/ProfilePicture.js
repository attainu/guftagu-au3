import React,{useState} from 'react'
import { Alert, Card, Button } from 'react-bootstrap'
import {FaPen} from 'react-icons/fa'
const axios=require('axios')


function ProfilePicture(props) {
    const [change,setChange]=useState(false)
    const [picture,updatePicture]=useState()
    const [error,setError]=useState({isError:false,message:""})

    let handleSubmit=e=>{
        e.preventDefault();

        if(picture===undefined){
            setError({...error,isError:true,message:"No picture Selected"})
            return;
        }else{
            setError({...error,isError:false,message:""})
            const formdata=new FormData();
            formdata.append("propic",picture)
            axios.put(`http://localhost:8000/update/picture/${JSON.parse(sessionStorage.getItem('login')).email}`, formdata, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res =>{
                setError({...error,isError:true,message:"successful please login again"})
            
            })
            .catch(err => setError({...error, isError: true, message: "Updation failed"}));
        }
        setTimeout(()=>{
            props.logout()
        },10000)
    }
   
    return (
        <div className="border-0">
        {
            error.isError && (
                <Alert variant="danger">
                    {error.message}
                </Alert>
            )
        }
        <img id="pic" src={props.propic} alt="profilepicture" roundedcircle="true"/>
        {
            change ? (
                <Card.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="custom-file">
                                <input type="file" name="files" id="customFile" className="custom-file-input form-control-sm" onChange={e => updatePicture(e.target.files[0])}/>
                                <label className="custom-file-label col-form-label-sm" htmlFor="customFile">Choose picture</label>
                            </div>
                        </div>
                        <div className="d-flex">
                            <Button variant="light" type="submit" size="sm">Upload</Button>
                            <Button variant="light" size="sm" onClick={() => {
                                setError({...error, isError: false, message: ""});
                                setChange(false);
                            }}>Close</Button>
                        </div>
                    </form>
                </Card.Body>
            ) : (
                <Card.Body>
                    <FaPen id="picediticon" onClick={() => setChange(true)}/>
                </Card.Body>
            )
        }
        
    </div>
    )
}

export default ProfilePicture
