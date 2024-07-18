import SoftwareLicence from "../../src/domain/entity/SoftwareLicence"
import ISoftwareLicenceRepository from "../../src/application/repository/ISoftwareLicenceRepository"
import ISoftwareRepository from "../../src/application/repository/ISoftwareRepository"
import CreateSoftwareLicence from "../../src/application/useCase/SoftwareLicence/CreateSoftwareLicence"
import UserRepository from "../../src/infra/repository/UserRepository"
import { SoftwareLicenceRepository } from "../../src/infra/repository/SoftwareLicenceRepository"
import { SoftwareRepository } from "../../src/infra/repository/SoftwareRepository"
import Software from "../../src/domain/entity/Software"
import User from "../../src/domain/entity/User"

test("deve criar uma licença de sofware", async () => {

    const softwareLicenceRepository =  new SoftwareLicenceRepository()
    const softwareRepository =  new SoftwareRepository()
    const userRepository =  new UserRepository()

    const software = Software.create('Whaticket', '1.0.0', 'Whaticket')
    softwareRepository.save(software)

    const owner = User.create("Mateus Geraldo Drumond", "10697020649", "ester.silvana.alves@selfcd.com.br", "123456")
    userRepository.save(owner)

    const licenceSoftware = {
        userId: owner.userId,
        softwareId: software.softwareId,
        expirationDate: null
    }
    const softwareLicenceUseCase = new CreateSoftwareLicence(softwareLicenceRepository, softwareRepository, userRepository)
    const softwareLicence = await softwareLicenceUseCase.execute(licenceSoftware)
    expect(softwareLicence.licenceCode).toBeDefined()
})