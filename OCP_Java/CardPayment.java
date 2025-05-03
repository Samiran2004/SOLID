package OCP_Java;

public class CardPayment implements Ipayment {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing credit card payment of " + amount);
    }
}