import { Injectable } from "@nestjs/common"

@Injectable()
export class UserRepository{
    private users = []
    
    save(user){
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