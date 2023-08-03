import { Body, Controller, Post } from "@nestjs/common";
import { UserRepository } from "./user.repository";

@Controller('/users')
export class UserController{

    private userRepository = new UserRepository
    
    @Post()
    async create(@Body() request){
        this.userRepository.save(request)
        return this.userRepository.getUsers()
    }
}