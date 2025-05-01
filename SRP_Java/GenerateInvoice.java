package SRP_Java;

import java.util.List;

public class GenerateInvoice {
    public void printInvoice(List<Product> products, double totalAmount) {
        System.out.println("Invoice Date: " + new java.util.Date());
        System.out.println("----------------------");
        System.out.println("Product Name\tPrice");
        System.out.println("----------------------");
        for (Product p : products) {
            System.out.println(p.getName() + "\t" + p.getPrice());
        }
        System.out.println("----------------------");
        System.out.println("Total Amount: " + totalAmount);
    }
}
