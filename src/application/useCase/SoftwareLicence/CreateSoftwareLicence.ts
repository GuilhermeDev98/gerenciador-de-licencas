import SoftwareLicence, { LicenceStatus } from "../../../domain/entity/SoftwareLicence";
import LicenceCode from "../../../domain/vo/LicenceCode";
import SoftwareLicenceRepository from "../../repository/ISoftwareLicenceRepository";
import ISoftwareRepository from "../../repository/ISoftwareRepository";
import UserRepository from "../../repository/IUserRepository";
import UseCase from "../UseCase";
import crypto from "crypto";

export default class CreateSoftwareLicence implements UseCase {
  constructor(
    readonly softwareLicenceRepository: SoftwareLicenceRepository,
    readonly softwareRepository: ISoftwareRepository,
    readonly usuarioRepository: UserRepository
  ) {}

  async execute(input: input): Promise<output> {
    const licenceCode = new LicenceCode(crypto.randomUUID());
    const software = this.softwareRepository.getSoftwareById(input.softwareId);
    const user = await this.usuarioRepository.getUserById(input.userId);
    if (!software) throw new Error("Software Not Found !");
    if (!user) throw new Error("User Not Found");
    const softwareLicence = SoftwareLicence.create(licenceCode, software, user.id, LicenceStatus.PENDENTE_PAGAMENTO);

    return {
        softwarelicenId: softwareLicence.softwarelicenceId,
        licenceStatus: LicenceStatus.PENDENTE_PAGAMENTO,
        ownerName: user.name,
        licenceCode: softwareLicence.getLicence()
    };
  }
}

type input = {
  userId: string;
  softwareId: string;
  expirationDate: Date | null;
};

type output = {
  softwarelicenId: string;
  licenceStatus: string;
  ownerName: string;
  licenceCode: string;
};
