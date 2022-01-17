"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//Product Controller
const product_controller_1 = require("../controllers/product.controller");
router.route('/product/:id')
    .get(product_controller_1.getProduct);
exports.default = router;
//# sourceMappingURL=index.js.map