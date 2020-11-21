import express from 'express'
import mongoose from 'mongoose'
import session from 'express-session'
import authConfig from '../auth/index.js'
import userAuthModel from '../models/userAuth.js';
import routes from '../routes/index.js'
import cors from 'cors'
import bodyParser from 'body-parser'

export default async (config) => {
    const app = express()
    app.use(bodyParser.json())
    app.options('*',cors())
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", config.CLIENT_URL);
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader(
            "Access-Control-Allow-Headers",
            "Origin,X-Requested-With,Content-Type,Authorization"
        );
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET,POST,PATCH,DELETE,HEAD,PUT"
        );

        next();
    });


    app.use(session({ secret: config.SESSION_SECRET }))
    await authConfig(app, config, userAuthModel)
    app.use('/', routes)
    const url = `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@cluster0.ib2iv.mongodb.net/${config.DB_NAME}?retryWrites=true&w=majority`
    await mongoose.connect(url)
    app.listen({port: 5000})

}