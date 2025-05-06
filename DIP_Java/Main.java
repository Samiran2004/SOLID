package DIP_Java;

public class Main {

    public static void main(String[] args) {
        Repository mongoRepo = new UserMongoRepository();
        Repository postgresRepo = new UserPostgresRepository();
        Repository testRepo = new UserTestRepository();

        UserService service1 = new UserService(mongoRepo);
        UserService service2 = new UserService(postgresRepo);
        UserService service3 = new UserService(testRepo);

        UserController controller1 = new UserController(service1);
        UserController controller2 = new UserController(service2);
        UserController controller3 = new UserController(service3);

        controller1.save();
        controller2.save();
        controller3.save();
    }
}