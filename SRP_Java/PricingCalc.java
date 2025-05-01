package SRP_Java;

import java.util.List;

public class PricingCalc {
    public double calculatePricing(List<Product> products) {
        return products.stream().mapToDouble(Product::getPrice).sum();
    }
}