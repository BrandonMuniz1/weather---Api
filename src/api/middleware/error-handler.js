module.exports = async (err, req, res, next) => {
   try {
     let {status} = err;
     const {code} = err;
     const {message} = err;
    if(err.hasOwnProperty('cod')) status = err.cod;
    if (res.headersSent) {
        return next(err)
      }    
      res.status((status || 500)).send({message , code})
   } catch (error) {
      res.status(500).send({message: "API Not able to process request"})
   }
}