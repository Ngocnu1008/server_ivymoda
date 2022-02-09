var notFound = require('./handler/NotFounfHandler');
const routerLogin = require('./route/login');
function Routes(app) {
    //general: 
    app.use("/api/user", routerLogin)

    app.get("/api/test", (req, res) => {
        res.send("successfully")
    })
    app.use("*", notFound);
}
module.exports = Routes;