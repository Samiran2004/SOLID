package SRP_Java;

public class Main {

    public static void main(String[] args) {
        // Create product...
        Product p1 = new Product(1, "Product1", 100);
        Product p2 = new Product(2, "Product2", 300);
        Product p3 = new Product(3, "Product3", 500);

        // Create orders...
        Orders order = new Orders();
        order.addProduct(p1);
        order.addProduct(p2);
        order.addProduct(p3);

        // Calculate pricing...
        PricingCalc calc = new PricingCalc();
        double total = calc.calculatePricing(order.geProducts());

        // Generate Invoice...
        GenerateInvoice genInv = new GenerateInvoice();
        genInv.printInvoice(order.geProducts(), total);

        // Process payment...
        PaymentProcessor payment = new PaymentProcessor();
        payment.processPayment();
    }
}