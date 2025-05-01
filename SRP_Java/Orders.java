package SRP_Java;

import java.util.ArrayList;
import java.util.List;

public class Orders {
   private List<Product> products = new ArrayList<>();

   public void addProduct(Product product) {
      products.add(product);
   }

   public List<Product> geProducts() {
      return products;
   }
}
