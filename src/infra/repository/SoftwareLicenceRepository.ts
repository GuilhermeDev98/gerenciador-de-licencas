import ISoftwareLicenceRepository from "../../application/repository/ISoftwareLicenceRepository";
import SoftwareLicence from "../../domain/entity/SoftwareLicence";

export class SoftwareLicenceRepository implements ISoftwareLicenceRepository{
    public softwareLicences: SoftwareLicence[];

    constructor(){
        this.softwareLicences = []
    }
    
    getLicenceById(licenceId: string): SoftwareLicence | void {
        return this.softwareLicences.find((softwareLicence) => softwareLicence.softwarelicenceId == licenceId)
    }
    save(softwareLicence: SoftwareLicence): SoftwareLicence {
        throw new Error("Method not implemented.");
    }

}