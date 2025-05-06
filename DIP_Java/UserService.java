package DIP_Java;

public class UserService {
    private Repository repository;

    public UserService(Repository repository) {
        this.repository = repository;
    }

    public void save() {
        repository.save();
    }
}
