const passport = require('../middleware/passport');
let { userDatabase } = require('../models/usermodel');

let adminController = {
    login: (req, res) => {
        res.render("admin/index", { req });
    },
    deleteSession: (req, res) => {

    },
};

module.exports = adminController;