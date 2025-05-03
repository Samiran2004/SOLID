package OCP_Java;

public class PaymentService {
    private Ipayment processor;

    PaymentService(Ipayment processor) {
        this.processor = processor;
    }

    public void process(double amount) {
        processor.processPayment(amount);
    }
}
