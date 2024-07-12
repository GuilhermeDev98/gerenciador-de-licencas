import CreateSoftwareLicence from "../../src/application/useCase/SoftwareLicence/CreateSoftwareLicence"

test("deve criar uma licença de sofware", () => {
    const licenceSoftware = {
        userId: 1,
        softwareId: 1,
        expirationDate: null
    }

    const softwareLicence = CreateSoftwareLicence.create(licenceSoftware.userId, licenceSoftware.softwareId, licenceSoftware.expirationDate)
    expect(softwareLicence.licenceCode).toBe(true)
})