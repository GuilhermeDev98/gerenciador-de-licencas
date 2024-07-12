import SoftwareLicenceRepository from "../../repository/SoftwareLicenceRepository";
import UseCase from "../UseCase";

export default class CreateSoftwareLicence implements UseCase{
    constructor(readonly softwareLicenceRepository: SoftwareLicenceRepository){

    }
    async execute(input: any): Promise<any> {
        const licence = this.softwareLicenceRepository.create()
    }
    
}

type input {
    userId: string,
    softwareId: string,
    expirationDate: Date | null
}