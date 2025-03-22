const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import các route
const categoryRoutes = require('./router/categoryRouter');
const productRoutes = require('./router/products');
const userRoutes = require('./router/userRouter');
const orderRoutes = require('./router/orderRouter');
const supplierRoutes = require('./router/supplierRouter');
const purchaseOrderRoutes = require('./router/inventoryRouter');
const shippingInfoRoutes = require('./router/deliveryRouter');
const voucherRoutes = require('./router/voucherRouter');
const cartRoutes = require('./router/cart');
const authRoutes = require('./router/auth');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

