import express, { Router } from "express"
import homeController from '../controller/homeController';
import getDetailPage from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);  
    router.get('/detail/users/:id', homeController.getDetailPage);  
    router.post('/create-new-user', homeController.createNewUser);  
    //router.post('delete/user', homeController.)
    router.get('/about', (req, res) => {
        res.send('hello tui ne')
    })

    return app.use('/', router);     
}

export default initWebRoute;