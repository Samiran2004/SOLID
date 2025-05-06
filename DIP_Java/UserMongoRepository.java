package DIP_Java;

public class UserMongoRepository implements Repository{
    @Override
    public void save() {
        System.out.println("Save user in the mongodb database...");
    }
}
