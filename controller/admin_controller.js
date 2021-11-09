let adminController = {
    login: (req, res) => {
        req.sessionStore.all((err, session) => {
            if (err) {
                return console.log(err);
            }
            // console.log(session)
            let keys = Object.keys(session)
            res.render("admin/index", { req, keys });
        });
    },
    deleteSession: (req, res) => {
        const sessionID = req.query.sessionid;
        req.sessionStore.destroy(sessionID);
        req.sessionStore.all((err, session) => {
            if (err) {
                return console.log(err);
            }
            let keys = Object.keys(session)
            res.render('admin/index', { req, keys })
        })
    },
};

module.exports = adminController;