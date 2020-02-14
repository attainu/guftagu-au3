const accounts = require('./database')
const {Op} = require('sequelize')

module.exports.accounts = (req, res)=>{
    console.log("inside accounts api", req.body)
    accounts.sync()
    .then((instance) => {
        instance.create({
            email:req.body.email,
            username:req.body.username, 
            password:req.body.password,
            token:req.body.token
        })
    .then(data=>{
        // console.log(data)
        // const error = null 
        // res.json({error:error, data,})
        res.send(200).send('OK')
    })
    // then res.send header 200 OK
    .catch((err) => {
        // exception: duplicate email
        console.log(err.name)
        res.statusMessage = err.name
        res.status(400).end()
        // res.json({error:err, data:[]})
    })

})
}

module.exports.login=(req,res)=>{
      //console.log(data)
      accounts.findOne({
              where:{
                  email:req.body.email
              }
              
          })
          //console.log(data)
          .then((data)=>{
              if(!data || (!data.validPassword(req.body.password))){
                  res.status(400).send('notok')
              }else{
                //   delete data[password]
                  res.json(data)
              }  
              
              //if(req.body.email==accounts.dataValues.email && req.body.password==accounts.dataValues.validPassword(password)){
                //  res.send(200).send('ok')
              //}else if(accounts.validPassword(password)){
                //res.send(200).send('passwordok')
              //}
          })
          .catch(err=>{
            res.statusMessage = err.name
              res.status(400).end()
          })
      } 

module.exports.search = (req, res) => {
        let search = req.params.search 
        console.log("inside search controller:", search)
        accounts.findAll({
            where : { 
                username: {[Op.substring]:search}
                
            }
        })
        .then(result => {
            res.json({results:result})
        })
        .catch(err => console.log("Error searching for users: ", err))
    }

// //profile image    
// module.exports.uploads= (req, res) => {
//     if (req.files === null) {
//       return res.status(400).json({ msg: 'No file uploaded' });
//     }
  
//     const file = req.files.file;
//     accounts.create({
//         img:file
//     })
  
//     file.mv(`${__dirname}/public/uploads/${file.name}`, err => {
//       if (err) {
//         console.error(err);
//         return res.status(500).send(err);
//       }
  
//       res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
//     });
//   }

module.exports.editName=(req,res)=>{
    const username=req.body.username
    accounts.findOne({
        where:{
            username:username
        }.update({username})
    }).then(()=>{
        res.status(200).send('updated')
    })
    .then(updatedata=>{
        res.json(updatedata)
    })
    .catch((err)=>{
        console('error while updating',err)
    })
}