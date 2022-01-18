import {Request,  Response} from "express";
import axios from "axios";

//Aggregation service with Promise.all from Axios
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
