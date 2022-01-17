import {Router} from "express";
const router = Router();

//Product Controller
import { getProduct} from '../controllers/product.controller';

router.route('/product/:id')
    .get(getProduct)

export default router;