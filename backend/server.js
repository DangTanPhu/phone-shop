const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path");
const cron = require("node-cron");
const inventoryController = require("./controllers/inventoryController");

dotenv.config(); // Load biến môi trường

const app = express();

// Cấu hình CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    methods: "GET, POST, PUT, DELETE, OPTIONS",
  })
);

// Middleware chung
app.use(express.json());
app.use(bodyParser.json());

// Middleware log request
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Serve static files (React frontend)
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Import routes
const categoryRoutes = require('./router/categories');
const productRoutes = require('./router/products');
const userRoutes = require('./router/userRouter');
const orderRoutes = require('./router/orderRouter');
const supplierRoutes = require('./router/supplierRouter');
const purchaseOrderRoutes = require('./router/inventoryRouter');
const shippingInfoRoutes = require('./router/deliveryRouter');
const voucherRoutes = require('./router/voucherRouter');
const cartRoutes = require('./router/cart');
const authRoutes = require('./router/auth');

// API Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/purchase-orders', purchaseOrderRoutes);
app.use('/api/shipping-info', shippingInfoRoutes);
app.use('/api/vouchers', voucherRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Cron job chạy mỗi ngày lúc 00:00
cron.schedule("0 0 * * *", async () => {
  try {
    await inventoryController.checkAndCreatePurchaseOrders();
    console.log("Cron job chạy thành công!");
  } catch (error) {
    console.error("Lỗi khi chạy cron job:", error);
  }
});

// Xử lý lỗi chung
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Đã xảy ra lỗi server", error: err.message });
});

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
