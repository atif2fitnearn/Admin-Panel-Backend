import express, { Application } from 'express';
import dotenv from 'dotenv';
import landingPageRoutes from './routes/landingPage';
import newPageRoutes from "./routes/newPageRoutes";
import bodyParser from 'body-parser';
import aboutUsRoutes from './routes/aboutUs';
import dataDeletionRoutes from './routes/dataDeletion';
import termsConRoutes from './routes/termsCon';
import returnRefundRoutes from './routes/returnRefund';
import privacyPolicyRoutes from './routes/privacyPolicy';
import errorHandler from './middlewares/errorHandler';

dotenv.config();
const cors = require('cors')
const app: Application = express();


app.use(express.json());


app.use(cors({ origin: "*" }));
app.use(bodyParser.json());



app.use(errorHandler);
app.use('/api', returnRefundRoutes);
app.use('/api', aboutUsRoutes);
app.use('/api',dataDeletionRoutes);
app.use('/api',termsConRoutes);
app.use('/api',privacyPolicyRoutes);
app.use("/api/new-page", newPageRoutes);
app.use('/api/landing-pages', landingPageRoutes);



export default app;
