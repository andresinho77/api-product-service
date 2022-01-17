"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = void 0;
const axios_1 = __importDefault(require("axios"));
/*export async function getProduct(req:Request , res:Response) {
    const id = req.params.id;
    console.log(id);
    const url = process.env.URL_API_ADIDAS;
    axios.get(url ||'').then(resp =>{
        return res.json(resp.data);
    });
    
}*/
function getProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const urlAdidas = process.env.URL_API_ADIDAS + '/' + id;
        const urlReview = process.env.URL_API_GETREVIEW + '/' + id;
        try {
            const api = yield Promise.all([
                axios_1.default.get(urlAdidas || ''),
                axios_1.default.get(urlReview || '')
            ]);
            const data = api.map((api) => api.data);
            console.log(data.flat());
            return res.json(data.flat());
        }
        catch (_a) {
            throw Error("Promise failed");
        }
    });
}
exports.getProduct = getProduct;
/*export async function getProductAdidas(req:Request , res:Response, id:string) {
    const idProduct = id;
    const url = process.env.URL_API_ADIDAS + '/'+idProduct;
    const a = axios.get(url).then(resp =>{
        return resp.data;
    });
}

export async function getProductOtro(req:Request , res:Response) {
    const id = req.params.id;


    return getProductReview(req, res,id);
}*/ 
//# sourceMappingURL=product.controller.js.map