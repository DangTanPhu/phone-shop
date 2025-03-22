const express = require('express');
const router = express.Router();
const voucherController = require('../controllers/voucherController');
const authMiddleware = require('../Middleware/authMiddleware');
const adminMiddleware = require('../Middleware/authMiddleware');

router.get('/', authMiddleware, voucherController.getVouchers);
router.post('/apply', authMiddleware, voucherController.applyVoucher);
router.post('/', authMiddleware, adminMiddleware, voucherController.createVoucher);

module.exports = router;
