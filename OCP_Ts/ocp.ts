// Open-Close-Principle...

interface IpaymentProcessor {
    processPayment(amount: number): void;
}

class PaymentProcessor {
    processor: IpaymentProcessor;
    constructor(paymentProcessor: IpaymentProcessor) {
        this.processor = paymentProcessor;
    }
    processPayment(amount: number): void {
        this.processor.processPayment(amount);
    }
}

class CreditCardProcessor implements IpaymentProcessor {
    processPayment(amount: number) {
        console.log(`Processing credit card payment of ${amount}`);
    }
}

class PayPalProcessor implements IpaymentProcessor {
    processPayment(amount: number) {
        console.log(`Processing Paypal payment of ${amount}`);
    }
}

class UpiProcessor implements IpaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing UPI payment of ${amount}`);
    }
}

const creditCardProcesssor = new CreditCardProcessor();
let payment = new PaymentProcessor(creditCardProcesssor);
payment.processPayment(1000);

const paypalProcessor = new PayPalProcessor();
payment = new PaymentProcessor(paypalProcessor);
payment.processPayment(2000);

const upiProcessor = new UpiProcessor();
payment = new PaymentProcessor(upiProcessor);
payment.processPayment(500);

export { };