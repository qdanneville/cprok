import express from "express"

import projectRoutes from "../modules/project/routes"

const Router = (app) => {
    var apiRoutes = express.Router();

    // Home route. We'll end up changing this to our main front end index later.
    app.get('/', function (req, res) {
        res.send('This Route is not yet defined.');
    });

    //User router
    app.use('/api/', apiRoutes);

    app.use('/api/project', projectRoutes);
}

export default Router