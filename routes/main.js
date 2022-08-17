const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
//requiring this file takes the object within this file and basically copies and pastes it like so
// const homeController = {
//     getIndex: (req,res)=>{
//         res.render('index.ejs')
//     }
// }
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
//using dot notation for this because homeController is an object
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router