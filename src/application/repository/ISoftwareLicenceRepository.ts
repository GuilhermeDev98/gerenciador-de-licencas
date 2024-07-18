import SoftwareLicence from "../../domain/entity/SoftwareLicence"

export default interface ISoftwareLicenceRepository{
    getLicenceById(licenceId: string): SoftwareLicence | void
    save(softwareLicence: SoftwareLicence): SoftwareLicence
}