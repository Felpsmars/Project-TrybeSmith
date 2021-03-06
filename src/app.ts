import express from 'express';
import userRoutes from './routes/user.routes';
import loginRoutes from './routes/login.routes';
import productRoutes from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/products', productRoutes);

export default app;