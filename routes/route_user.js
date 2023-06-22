const userCtrl = require('../controllers/user');
const site = require('../controllers/display_users');
const auth = require('../middleware/auth');

module.exports = (app) => {
    app.post('/register', userCtrl.signup);
    app.post('/login', userCtrl.login);
    app.post('/users',auth, site.display);
}
