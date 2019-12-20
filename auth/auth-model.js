const db = require('../database/dbConfig');

function getUsers(){
    return db("users").select("id","username")
}
function register(user){
    return db("users").insert(user)
}
function login(user)
   { 
       return db("users").select("id","username").where(user.username)
   }
   function getUser(user){
       return db("users").where({"username":user})
   }

module.exports = {
    getUsers,
    getUser,
    register,
    login
}