//changed here
 module.exports.accounts = (ref1, ref2, props, data) => {
    fetch('http://localhost:8000/accounts', {
        method:'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/text'},
        body: JSON.stringify(data)
    })
    .then((response) => {
        console.log(response);
        if(response.ok)
            return response.text()
        else{
            throw Error(response.statusText)  

        }
    }
    )
    .then(()=> {
        // ref1.current.nextSibling.style.opacity=0.1
        ref1.current.classList.remove('d-none')
        setTimeout(()=>{
            ref1.current.classList.add('d-none')
            ref1.current.nextSibling.style.opacity=1
            const redirect = data.token? '/home':'/login'
            props.history.push(redirect)
        }, 1000)

        }
    )
    .catch((err)=> {
        console.log(err)
        ref2.current.classList.remove('d-none')
        setTimeout(()=>{
            ref2.current.classList.add('d-none')
            ref1.current.nextSibling.style.opacity=1
            props.history.push('/')
        }, 1000)

    })
}

module.exports.login =(refSuccess,refFail,props,data)=>{
    fetch('http://localhost:8000/login',{
        method:"POST",
        headers: {'Content-Type': 'application/json', 'Accept': 'application/text'},
        body: JSON.stringify(data)
    })
    .then((response)=>{
      if(response.ok){
        refSuccess.current.classList.remove('d-none')
          console.log("login successful")
          setTimeout(()=>{
            refSuccess.current.classList.add('d-none')
            refSuccess.current.nextSibling.style.opacity=1
            props.history.push('/home')
        }, 500)
          
          return response.json()
      }  else{
          throw Error(response.statusText)
      }
    })
    .then(res => {
        // store in locatstorage
        sessionStorage.setItem('login', JSON.stringify(res))
    })
    .catch((err)=> {
        console.log("login not successful",err)
        refFail.current.classList.remove('d-none')
        setTimeout(()=>{
            refFail.current.classList.add('d-none')
            refSuccess.current.nextSibling.style.opacity=1
            props.history.push('/login')
        }, 5000)

    })
}



module.exports.search = (props, search) => {
    console.log("inside search api.js", search)
    fetch(`http://localhost:8000/search/${search}`)
    .then((res) => res.json())
    .then(res => {
        console.log(res)
        props.dispatch({type:"searched users", value:res.results})

    })
    .catch(err => {
        console.log(err)
        props.history.push('/home')
    })

}

// module.exports.image=(props,FormData)=>{

//     fetch(`http://localhost:8000/profileImage/${FormData}`,{
//         method:'POST',
//         headers:{'Content-Type': 'multipart/form-data'},
//         body:JSON.stringify(FormData)
//         .then(res=>res.json())
//         .catch((err)=>{
//             if (err.response.status === 500) {
//                 console.log('There was a problem with the server');
//               }else{
//                 console.log(err.response.data.msg);
//               }

//         })
//     })
// }

module.exports.editName=(updatedata)=>{
fetch(`https://localhost8000/editName`,{
    method:'PUT',
    headers:{'Content-Type': 'application/json', 'Accept': 'application/text'},
    body:JSON.stringify(updatedata)
})
.then(response=>{
    if(response.updated){
        return response.json()
    }
})
.catch(err=>{
      console.log("username no updated",err)
})
}