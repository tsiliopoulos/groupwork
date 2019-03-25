let express = require('express');
let router = express.Router();

let passport = require('passport');

let roomController = require('../controllers/room');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Contact List page - READ Operation */
router.get('/', roomController.displayRoomList);

/* GET Route for the Add page
   this will display the Add page */


//router.get('/add', roomController.displayAddPage);

/* POST Route for processing the Add page */
//router.post('/add', roomController.processAddPage);

/* GET request - display the Edit page */
//router.get('/edit/:id', roomController.displayEditPage);

/* POST request - Update the database with data from the Edit Page */
//router.post('/edit/:id', roomController.processEditPage);

/* GET request to perform the delete action */
//router.get('/delete/:id', roomController.performDelete);

module.exports = router;
