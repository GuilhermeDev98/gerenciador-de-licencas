import crypto from 'crypto'

export default class Software{
    constructor(
        readonly softwareId: string,
        readonly name: string,
        readonly version: string,
        readonly description: string,
        readonly createdAt: Date,
        readonly updatedAt: Date,
        readonly deletedAt: Date | null
    ){}

    static create(name: string, version: string, description: string){
        const softwareCreated = new Software(crypto.randomUUID(), name, version, description, new Date(), new Date(), null)
        return softwareCreated
    }
}