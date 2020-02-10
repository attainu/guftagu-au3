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