import crypto from 'crypto'

export default class Payment {

    private paymentStatus: PaymentStatus
    
    constructor(
        readonly paymentId: string,
        readonly softwareId: string,
        readonly buyerId: string,
    ){
        this.paymentStatus = PaymentStatus.PENDING
    }

    static create(softwareId: string, buyerId: string){
        return new Payment(crypto.randomUUID(), softwareId, buyerId)
    }

    getPaymentStatus(){
        return this.paymentStatus
    }

    aprrovePayment(){
        if(this.paymentStatus !== PaymentStatus.PENDING) throw new Error("Only payments with pending status can be approved !")
        this.paymentStatus = PaymentStatus.APPROVED
    }

    cancelPayment(){
        if(this.paymentStatus !== PaymentStatus.PENDING) throw new Error("Only payments with pending status can be cancelled !")
        this.paymentStatus = PaymentStatus.CANCELLED
    }

    refundPayment(){
        if(this.paymentStatus !== PaymentStatus.APPROVED) throw new Error("Only payments with approved status can be refunded !")
        this.paymentStatus = PaymentStatus.CANCELLED
    }
    
}

export enum PaymentStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REFUNDED = "REFUNDED",
    CANCELLED = "CANCELLED",
}