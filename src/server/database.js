const Sequelize = require('sequelize')
db.authenticate()
.then(() => console.log('database connection made!'))
.catch(() => console.log("connection to db failed!"))
// models.chats

const accountsModel = models.accounts(db) 
const chatsModel = models.chats(db)

chatsModel.belongsTo(accountsModel)

const sync = () => {
    // dont force=true. otherwise it deletes all the data on server restart!
    return db.sync()
}



// association
// accountsModel.hasMany(chatsModel, {foreignKey: 'user'}, {onUpdate: 'CASCADE'});
// accountsModel.hasMany(chatsModel, {foreignKey: 'user', constraints: true});
// accountsModel.hasMany(chatsModel);
// chatsModel.belongsTo(accountsModel);


sync()
.then(() => {
    console.log('sync chats db with ..??')
    module.exports.accounts = accountsModel
    module.exports.chats = chatsModel
    module.exports.sequelize = db
})
.catch(() => console.log("sequelize instance failed ..."))

// module.exports.accounts = accountsModel
// module.exports.chats = chatsModel
// module.exports.sequelize = sequelize
// console.log(accountsModel)


// module.exports =  accountsModel


