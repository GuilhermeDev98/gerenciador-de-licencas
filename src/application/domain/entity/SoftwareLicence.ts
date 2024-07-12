import LicenceCode from "../vo/LicenceCode";
import Software from "./Software";
import User from "./User";

export default class SoftwareLicence{
    constructor(
        readonly id: string,
        readonly code: LicenceCode,
        readonly software: Software,
        readonly owner: User,
        readonly createdAt: Date,
        readonly updatedAt: Date,
        readonly status: PaymentStatus
    ){}
}

export enum PaymentStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
  }