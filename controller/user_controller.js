const userModel = require("../models/usermodel").userModel;

const getUserByEmailIdAndPassword = (email, password) => {
    let user = userModel.findOne(email);
    if (user) {
        if (isUserValid(user, password)) { //Takes in username and password and checks if the password matches to the one in the database.
            return user; //If true, return the user's information back to passport
        }
    }
    return null;
};
const getUserById = (id) => {
    let user = userModel.findById(id);
    if (user) {
        return user;
    }
    return null;
};

function isUserValid(user, password) {
    return user.password === password;
}


const findOrAdd = (profile) => {
    let user = userModel.findOrAddGithub(profile);
    if (user) {
        console.log('Not null')
        return user;
    }
    return null;
}

module.exports = {
    getUserByEmailIdAndPassword,
    getUserById,
    findOrAdd
};
