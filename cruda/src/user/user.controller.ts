import { Body, Controller, Post, Get } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/CreateUser.dto";
import { UserEntity } from "./user.entity";
import {v4 as uuid} from 'uuid';

@Controller('/users')
export class UserController{

    constructor(private userRepository:UserRepository){

    }

    @Post()
    async create(@Body() request:CreateUserDTO){
        const userEntity = new UserEntity
        userEntity.email = request.email
        userEntity.password = request.password
        userEntity.name = request.name
        userEntity.id = uuid()
        
        this.userRepository.save(userEntity)
        return {id:userEntity.id, message:"User created"}
    }

    @Get()
    async index(){
        return this.userRepository.getUsers()
    }
}