let adminController = {
    login: (req, res) => {
        req.sessionStore.all((err, session) => { //this function will recieve all current sessions.
            if (err) { //If any error, console.log it and return.
                return console.log(err);
            }
            let keys = Object.keys(session) //Put all sessionIDS into an array and return it 
            res.render("admin/index", { req, keys });
        });
    },
    deleteSession: (req, res) => {
        const sessionID = req.query.sessionid; //Gets targeted session.
        req.sessionStore.destroy(sessionID); //Destroys targeted session
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