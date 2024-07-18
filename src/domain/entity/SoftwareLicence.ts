import LicenceCode from "../vo/LicenceCode";
import Software from "./Software";
import User from "./User";
import crypto from "crypto";

export default class SoftwareLicence {
  private licenceCode: LicenceCode;

  constructor(
    readonly softwarelicenceId: string,
    licenceCode: string,
    software: Software,
    readonly ownerId: string,
    readonly createdAt: Date,
    readonly updatedAt: Date,
    readonly statusLicence: LicenceStatus
  ) {
    this.licenceCode = new LicenceCode(licenceCode);
  }

  static create(
    licenceCode: LicenceCode,
    software: Software,
    userId: string,
    licenceStatus: LicenceStatus
  ) {
    const softwarelicence = new SoftwareLicence(
      crypto.randomUUID(),
      licenceCode.getValue(),
      software,
      userId,
      new Date(),
      new Date(),
      licenceStatus
    );

    return softwarelicence;
  }

  getLicence() {
    return this.licenceCode.getValue();
  }
}

export enum LicenceStatus {
    ATIVA = "ATIVA",
    INATIVA = "INATIVA",
    EXPIRADA = "EXPIRADA",
    PENDENTE_PAGAMENTO = "PENDENTE_PAGAMENTO",
    CANCELADA = "CANCELADA",
    TESTE = "TESTE",
    DEVOLVIDA = "DEVOLVIDA",
}
