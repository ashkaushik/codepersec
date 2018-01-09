const express = require('express');
const router = express.Router();

mainCtrl = require('./../../Controller');
router.get('/report/:groupId/:reportId', mainCtrl.embedReport);

module.exports = router;