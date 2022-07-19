const express = require('express')
const router = express.Router()
const { StatusCodes } = require('http-status-codes')

const clientController = require('../controllers/client-controller')

router.get('/', async (req, res, next) => {
	result = await clientController.index();
	res.status(StatusCodes.CREATED).json(result);
})

module.exports = router