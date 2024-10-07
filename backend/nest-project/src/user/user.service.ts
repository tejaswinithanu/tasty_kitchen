import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

  constructor(@InjectModel(User) private usermodel : typeof User,private jwtService : JwtService ){
    
  }

  async create(data : User): Promise<User> {
    try{
      const {email,password,roles} = data
      const hashedPassword =await bcrypt.hash(password,10)
      let result =  await this.usermodel.create({email,password:hashedPassword,roles})
      return result.toJSON()
    }catch(e){
      return e
    }
    }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(email: string) {
    try {
      
      let result = await this.usermodel.findOne({where : ({email}) })
      return result
      
    } catch (error) {
      return error
    }
  }

  async login({email,password}){
    
    let userEmail =await this.findOne(email)
    if(userEmail){
      let getPassword = await bcrypt.compare(password,userEmail.password)
      let payload = {email,roles : userEmail.roles}
      if(getPassword){
        let result = this.jwtService.sign(payload)
        return {result}
        
      }else{
        throw new Error('Invalid Password')
      }
    }else{
      console.log('err')
    }

  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
