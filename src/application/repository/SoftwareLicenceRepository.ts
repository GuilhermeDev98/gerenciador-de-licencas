import SoftwareLicence from "../domain/entity/SoftwareLicence"

export default interface SoftwareLicenceRepository{
    getLicenceById(licenceId: string): Promise<SoftwareLicence>
    create(softwareLicence: SoftwareLicence): Promise<SoftwareLicence>
}