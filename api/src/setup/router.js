import express from "express"

import userRoutes from "../modules/user/routes"

const Router = (app) => {
    var apiRoutes = express.Router();

    // Home route. We'll end up changing this to our main front end index later.
    app.get('/', function (req, res) {
        res.send('This Route is not yet defined.');
    });

    //User router
    app.use('/api/', apiRoutes);

    app.use('/api/users', userRoutes);

    // app.get('/api/user', function (req, res) {
    //     res.send('User home.');
    // });
}

export default Router