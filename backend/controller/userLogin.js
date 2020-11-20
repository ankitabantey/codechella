const userLoginModel = require( '../models/userAuth' );
const jwt = require("jsonwebtoken");
const HttpError = require("../models/errorHandler");
const { validationResult } = require("express-validator");

const login = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new HttpError(`invalid input details, Cannot log you in, ${req.body.name,req.body.email,req.body.type}`, 422));
      }
}