const express = require('express')
const router = express.Router()

const { createNew, getAllMessages, deleteOne} = require('../controllers/messageControllers')


router.route('/messages')
    .get(getAllMessages)
    .post(createNew)

router.route('/message/:id')
    .delete(deleteOne)

module.exports = router