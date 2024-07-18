import Software from "../../src/domain/entity/Software"
import User from "../../src/domain/entity/User"
import { SoftwareLicenceRepository } from "../../src/infra/repository/SoftwareLicenceRepository"
import { SoftwareRepository } from "../../src/infra/repository/SoftwareRepository"
import UserRepository from "../../src/infra/repository/UserRepository"

test("deve comprar uma licença de software", async () => {

    const softwareLicenceRepository =  new SoftwareLicenceRepository()
    const softwareRepository =  new SoftwareRepository()
    const userRepository =  new UserRepository()

    const software = Software.create('Whaticket', '1.0.0', 'Whaticket')
    softwareRepository.save(software)

    const owner = User.create("Mateus Geraldo Drumond", "10697020649", "ester.silvana.alves@selfcd.com.br", "123456")
    userRepository.save(owner)

    const input = {
        softwareId:  software.softwareId,
        buyerId: owner.userId,
        paymentMethod: "pix",
        provider: "efi"
    }

    
})