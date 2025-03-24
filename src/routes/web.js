const express = require('express')
const router = express.Router()

const { getHomePage, getABC, getHello, postCreateUser, getCreateUsers, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeControllers')

router.get('/', getHomePage)

router.get('/abc', getABC)

router.get('/hello', getHello)

router.get('/create', getCreateUsers)

router.post('/create-user', postCreateUser)

router.post('/delete-user/:id', postDeleteUser)

router.post('/delete-user', postHandleRemoveUser)

router.post('/update-user', postUpdateUser)

router.get('/update/:id', getUpdatePage)






module.exports = router;