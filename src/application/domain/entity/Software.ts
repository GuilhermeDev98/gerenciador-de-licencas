export default class Software{
    constructor(
        readonly id: string,
        readonly name: string,
        readonly verison: string,
        readonly description: string,
        readonly createdAt: string,
        readonly updatedAt: string,
    ){}
}