import { Body, Controller, Post, Get } from "@nestjs/common";
import { UserRepository } from "./user.repository";

@Controller('/users')
export class UserController{

    constructor(private userRepository:UserRepository){

    }

    @Post()
    async create(@Body() request){
        console.log(request)
        this.userRepository.save(request)
        return this.userRepository.getUsers()
    }

    @Get()
    async index(){
        return this.userRepository.getUsers()
    }
}