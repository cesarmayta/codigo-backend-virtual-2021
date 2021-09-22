const boom = require('@hapi/boom');

function wrapError(err,req,res,next){
    if(!err.isBoom){
        next(boom.badImplementation(err));
    }
    next(err);
}

function errorHandler(err,req,res,next){
    const {
        output : {statusCode,payload}
    } = err;
    res.status(statusCode);
    res.json(payload);
}

module.exports = {
    wrapError,
    errorHandler
}