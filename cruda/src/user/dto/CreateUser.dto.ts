import { IsEmail, MinLength, IsNotEmpty } from "class-validator"
import { EmailIsUnique } from "../validation/email-is-unique.validator"

export class CreateUserDTO{
    
    @IsNotEmpty({
        message:'O nome não pode estar vazio.'
    })
    name:string
    
    @IsEmail(undefined, {
        message:'O e-mail informado é inválido.'
    })
    @IsNotEmpty({
        message:'O e-mail não pode estar vazio.'
    })
    @EmailIsUnique({ message: 'Já existe um usuário com este e-mail' })
    email:string
    
    @MinLength(6,{
        message:'A senha deve ter no mínimo 6 caracteres'
    })
    password:string
    

}