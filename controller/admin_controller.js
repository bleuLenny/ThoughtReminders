let adminController = {
    login: (req, res) => {
        res.render("admin/index", { req });
    },
    deleteSession: (req, res) => {

    },
};

module.exports = adminController;
