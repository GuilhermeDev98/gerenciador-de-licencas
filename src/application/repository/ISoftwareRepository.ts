import Software from "../../domain/entity/Software";

export default interface ISoftwareRepository{
    getSoftwareById(softwareId: string): Software | void
    save(software: Software): void
}