import { Injectable } from "@nestjs/common"
import { UserEntity } from "./user.entity"

@Injectable()
export class UserRepository{
    private users:UserEntity[] = []
    
    save(user:UserEntity){
        this.users.push(user)
    }

    getUsers(){
        return this.users
    }

    async existsWithEmail(email:string){
        const posibleUser = this.users.find(
            user=>user.email==email
        )

        return posibleUser !=undefined
    }
}