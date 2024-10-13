const {Router} = require('express')
const router = Router();
const {getItems, setItem} = require('../controllers/AllControllers')


router.get('/shop',getItems);
router.post('/setItem',setItem);
module.exports = router;