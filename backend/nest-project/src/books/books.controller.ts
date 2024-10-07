import { Controller, Get, Inject, Post,Body } from "@nestjs/common";
import { BooksService } from "./books.service";

@Controller()
export class BookController{

    constructor(private BooksService : BooksService){}

    @Get('/books')
    async GetBooks(){
        return await this.BooksService.getAuthors()
    }

    @Post('/books')
    async addBooks(@Body() data : any){
        return await this.BooksService.addAuthors(data)
        
    }

    
}