import { NextFunction, Request, Response } from "express"
import { creatNewBook, getBook } from "./book.services"



export const getAllBooks=async(req:Request,res:Response,next:NextFunction)=>{

    try{
     const books= await getBook()
     res.status(200).json(books)
    }catch(error){
      next(error)
    }
    
}



export const createPost=async(req:Request,res:Response,next:NextFunction)=>{
   try{
   const bookdata=req.body;
  const book = await creatNewBook(bookdata)
res.status(200).json({message:"creite success full "})
   }catch(error){
    next(error)

   }
}