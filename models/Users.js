module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        idusers:{
            type: DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement: true,
        },
        nombre:{
            type: DataTypes.STRING,
        },
        edad:{
            type: DataTypes.INTEGER,
        }
       
    },
    {
        tableName: "users",
        timestamps: false,
    }) 
    
    return Users;
    
   
}
