import { IsEmail, MinLength, IsNotEmpty } from "class-validator"

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
    email:string
    
    @MinLength(6,{
        message:'A senha deve ter no mínimo 6 caracteres'
    })
    password:string
    

}