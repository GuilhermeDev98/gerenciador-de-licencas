import UseCase from "../UseCase"

export default class BuySoftwareLicence implements UseCase{
    execute(input: any): Promise<any> {
        throw new Error("Method not implemented.")
    }

}

type input = {
    softwareId: string,
    buyerId: string
}