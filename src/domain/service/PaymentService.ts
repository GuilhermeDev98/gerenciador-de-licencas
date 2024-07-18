import Payment from "../entity/Payment"

export default interface IPaimentService{
    processPayment(paymentRequest: Payment): Promise<Payment>
    verifyPayment(paymentId: string): boolean
}