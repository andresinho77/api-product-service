"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
//Settings
app.set('port', process.env.PORT);
//Middleware
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
//routes
app.use('/', index_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map