export class UserRepository{
    private users = []
    
    save(user){
        this.users.push(user)
    }

    getUsers(){
        return this.users
    }
}