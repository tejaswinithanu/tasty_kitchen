import { Injectable } from "@nestjs/common";
import { BooksModule } from "./books.module";
import { InjectModel } from "@nestjs/sequelize";
import { Book } from "src/model/books.model";

@Injectable()
export class BooksService{
  constructor(
    @InjectModel(Book) private BookModel : typeof Book
  ){}

  
  async addAuthors(authorsDto: any): Promise<Book[]> {
    try{
    const result= await this.BookModel.create(authorsDto);
    return result.toJSON()
    }catch(e){
      console.log(e)
    }
  }

  async getAuthors(){
    try{
      return await this.BookModel.findAll();
    }catch(err){
      console.log(err)
    }
 
  }


}