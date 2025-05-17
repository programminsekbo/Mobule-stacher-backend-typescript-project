import { Book } from "./book.model"


export const getBook=async()=>{
    const result=await Book.find()

    return result

}