package OCP_Java;

public class Main {
    public static void main(String[] args) {
        CardPayment cardPayment = new CardPayment();
        PaymentService payment = new PaymentService(cardPayment);
        payment.process(200);
    }
}
