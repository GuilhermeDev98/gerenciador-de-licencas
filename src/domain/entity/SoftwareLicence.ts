import LicenceCode from "../vo/LicenceCode";
import Software from "./Software";
import User from "./User";
import crypto from "crypto";

export default class SoftwareLicence {
  private licenceStatus: LicenceStatus;
  private licenceCode: LicenceCode;

  constructor(
    readonly softwarelicenceId: string,
    licenceCode: string,
    readonly software: Software,
    readonly ownerId: string,
    readonly createdAt: Date,
    readonly updatedAt: Date,
  ) {
    this.licenceCode = new LicenceCode(licenceCode);
    this.licenceStatus = LicenceStatus.PENDENTE_PAGAMENTO
  }

  static create(
    licenceCode: LicenceCode,
    software: Software,
    userId: string,
  ) {
    const softwarelicence = new SoftwareLicence(
      crypto.randomUUID(),
      licenceCode.getValue(),
      software,
      userId,
      new Date(),
      new Date()
    );

    return softwarelicence;
  }

  getLicence() {
    if(this.licenceStatus !== LicenceStatus.ATIVA) throw new Error("License is not active !")
    return this.licenceCode.getValue();
  }

  activeLicence(){
    this.licenceStatus = LicenceStatus.ATIVA
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
