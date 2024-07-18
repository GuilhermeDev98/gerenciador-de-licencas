import CPF from "../vo/CPF";
import Email from "../vo/Email";
import Name from "../vo/Name";
import crypto from 'crypto'

export default class User{
    constructor(
        readonly userId: string,
        readonly name: string,
        readonly cpf: string,
        readonly email: string,
        readonly password: string,
        readonly createdAt: Date,
        readonly updatedAt: Date
    ){
        this.name = new Name(name).getValue()
        this.cpf = new CPF(cpf).getValue()
        this.email =  new Email(email).getValue()
    }

    static create(name: string, cpf: string, email: string, password: string){
        return new User(crypto.randomUUID(), name, cpf, email, password, new Date(), new Date())
    }
}