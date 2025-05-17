import { NextFunction, Request, Response } from "express"
import { getBook } from "./book.services"



export const getAllBooks=async(req:Request,res:Response,next:NextFunction)=>{

    try{
        const books= await getBook()
     res.status(200).json(books)
    }catch(error){
      next(error)
    }
    
}