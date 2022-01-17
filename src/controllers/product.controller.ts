import {Request,  Response} from "express";
import axios from "axios";

/*export async function getProduct(req:Request , res:Response) {
    const id = req.params.id;
    console.log(id); 
    const url = process.env.URL_API_ADIDAS;
    axios.get(url ||'').then(resp =>{
        return res.json(resp.data);
    });
    
}*/

export async function getProduct(req:Request , res:Response) {
    const id = req.params.id;
    const urlAdidas = process.env.URL_API_ADIDAS + '/'+id;
    const urlReview = process.env.URL_API_GETREVIEW + '/' +id;
  
    try {
        const api = await Promise.all([
          axios.get(urlAdidas||''),
          axios.get(urlReview||'')
        ]);
        const data = api.map((api) => api.data);
        console.log(data.flat());
        return res.json(data.flat())
      } catch {
        throw Error("Promise failed");
      }
}



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