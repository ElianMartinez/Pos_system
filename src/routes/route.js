const {Router} = require("express");
const router = Router();

const product_categoryRouter = require('./product_category'); 
const loginRouter = require('./login'); 
const employesRouter = require('./employes'); 

router.get('/', (req,res) => {
    res.json({
        res:"ok",
        body:"No hay nada"
    });
});

router.use('/product_category',product_categoryRouter);
router.use('/login',loginRouter);
router.use('/employees',employesRouter);




module.exports = router;