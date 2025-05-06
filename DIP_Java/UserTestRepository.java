package DIP_Java;

public class UserTestRepository implements Repository{
    @Override
    public void save() {
        System.out.println("Save user in the test database...");
    }
}
