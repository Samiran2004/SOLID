package Liskov_Java;

public class Permission {
    public interface BaseUser {
        public void getRole();
    }

    public class User implements BaseUser {

        @Override
        public void getRole() {
            System.out.println("User role...");
        }

        public void getAccess() {
            System.out.println("User access...");
        }
    }

    public class Admin extends User {
        @Override
        public void getRole() {
            System.out.println("Admin role...");
        }

        @Override
        public void getAccess() {
            System.out.println("Admin access...");
        }
    }

    public class Manager extends User {
        @Override
        public void getRole() {
            System.out.println("Manager role...");
        }

        @Override
        public void getAccess() {
            System.out.println("Manager access...");
        }
    }

    public class Customer implements BaseUser {
        @Override
        public void getRole() {
            System.out.println("Customer role...");
        }
    }

    public static void getRole(BaseUser user) {
        user.getRole();
    }

    public static void getAccess(User user) {
        user.getAccess();
    }

    public static void main(String[] args) {
        Permission newPermission = new Permission();
        User user = newPermission.new User();
        getRole(user);
        getAccess(user);

        Admin admin = newPermission.new Admin();
        getRole(admin);
        getAccess(admin);

        Manager manager = newPermission.new Manager();
        getRole(manager);
        getAccess(manager);

        Customer customer = newPermission.new Customer();
        getRole(customer);
        // getAccess(customer);
    }
}
