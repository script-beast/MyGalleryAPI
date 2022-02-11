const express = require('express')
const router = express.Router()
const controlreview = require('../controllers/Imgs')
const Img = require('../models')

router.route('/')
    .get(controlreview.index)
    .post(controlreview.addImgs)

router.get('/show/:id', controlreview.show)
router.get('/new', controlreview.new)
router.delete('/delete/:id', controlreview.deleteImg)


router.route('/edit/:id')
    .get(controlreview.editpg)
    .put(controlreview.EditImg)

router.get('/update/:id', controlreview.update)
module.exports = router