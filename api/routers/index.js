module.exports = (app) => {
    app.use('/', require("./info-router"))
    app.use('/register', require("./register-router"))
    app.use('*', require("./not-found"))
}