import Cpf from "../vo/Cpf";
import Email from "../vo/Email";
import Name from "../vo/Name";

export default class User{
    constructor(
        readonly id: string,
        readonly name: Name,
        readonly cpf: Cpf,
        readonly email: Email,
        readonly password: string,
        readonly createdAt: Date,
        readonly updatedAt: Date
    ){}
}