const bcrypt = require('bcrypt')

module.exports = (sequelize, Sequelize) => {
    // to do: use hooks to convert password to a hash
    let accounts=sequelize.define("accounts", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            // allowNull: false
            // default: sequelize.fn('uuid_generate_v4')
            // defaultValue:1,
            autoIncrement: true
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true

        },
        username:{
            type: Sequelize.STRING,
            allowNull:false   
        },
        password:{
            type: Sequelize.STRING,
            allowNull:false
        },
        img:{
            type: Sequelize.STRING,
            defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRpB9iJgSSs49SaW_wSr8bQWqSQ_C5u_jMg326JfvgsHXHNOJQ'
        },
        token:{
            type: Sequelize.BOOLEAN,
            // values: ['true', 'false'],
            allowNull:false

        }

    },
    {
        hooks: {
            beforeCreate: (account) => {
                account.password = bcrypt.hashSync(account.password, 10)
            }
        },
        // instanceMethods:{
        //     validPassword: function(password){
        //         return bcrypt.compareSync(password,this.password)
        //     }
        // }
    }
    )
    accounts.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
        }
        return accounts
    
}