const {Router} = require("express");
const router = Router();


const loginRouter = require('./login'); 
const employesRouter = require('./employes'); 
const productRouter = require('./product'); 
const salesRouter = require('./sales'); 
const customerRouter = require('./customer'); 

router.get('/', (req,res) => {
    res.json({
        res:"ok",
        body:"No hay nada"
    });
});


router.use('/login',loginRouter);
router.use('/employees',employesRouter);
router.use('/product',productRouter);
router.use('/sales',salesRouter);
router.use('/customer',customerRouter);




module.exports = router;