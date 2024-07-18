import ISoftwareRepository from "../../application/repository/ISoftwareRepository";
import Software from "../../domain/entity/Software";

export class SoftwareRepository implements ISoftwareRepository{

    public softwares: Software[];

    constructor(){
        this.softwares = []
    }

    getSoftwareById(softwareId: string): Software | void {
        return this.softwares.find((software: Software) => software.softwareId === softwareId)
    }
    save(software: Software): void {
        this.softwares.push(software)
    }

}