import express from "express"

import projectRoutes from "../modules/project/routes"
import userRoutes from "../modules/user/routes"
import pageRoutes from "../modules/page/routes"

const Router = (app) => {
    var apiRoutes = express.Router();

    // Home route. We'll end up changing this to our main front end index later.
    app.get('/', function (req, res) {
        res.send('This Route is not yet defined.');
    });

    //User router
    app.use('/api/', apiRoutes);

    app.use('/api/projects', projectRoutes);
    app.use('/api/pages', pageRoutes);
    app.use('/api/users', userRoutes);
}

export default Router