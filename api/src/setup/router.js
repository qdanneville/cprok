import express from "express"

import questionRoutes from "../modules/question/routes"
import userRoutes from "../modules/user/routes"
import gameRoutes from "../modules/game/routes"
import categoryRoutes from "../modules/category/routes"
import modRoutes from "../modules/mod/routes"

const Router = (app) => {
    var apiRoutes = express.Router();

    // Home route. We'll end up changing this to our main front end index later.
    app.get('/', function (req, res) {
        res.send('This Route is not yet defined.');
    });

    //User router
    app.use('/api/', apiRoutes);

    app.use('/api/questions', questionRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api/games', gameRoutes);
    app.use('/api/categories', categoryRoutes);
    app.use('/api/mods/', modRoutes);
}

export default Router