var bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const db = require("../models/index");


let createNewUser = async (data)=>{
    return new Promise( async(resolve, reject)=>{
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                userName: data.userName,
                email: data.email,
                password: hashPasswordFromBcrypt,
                gender: data.gender === '1' ? true : false,
                address: data.address,
                phone: data.phone,
            })

            resolve('already created user')
        } catch (error) {
            reject(error);
        }
    })
}

let hashUserPassword = (password) =>{
    return new Promise(async (resolve, reject)=>{
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports ={
    createNewUser: createNewUser,
}