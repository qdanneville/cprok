import express from "express"

import skillRoutes from "../modules/skill/routes"
import userRoutes from "../modules/user/routes"
import moduleRoutes from "../modules/module/routes"

const Router = (app) => {
    var apiRoutes = express.Router();

    // Home route. We'll end up changing this to our main front end index later.
    app.get('/', function (req, res) {
        res.send('This Route is not yet defined.');
    });

    //User router
    app.use('/api/', apiRoutes);

    app.use('/api/skills', skillRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api/modules', moduleRoutes);
}

export default Router