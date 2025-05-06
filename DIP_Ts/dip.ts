interface Repository {
    save(): void;
}

class UserController {
    constructor(private userService: UserService) { };
    save() {
        // console.log("Save user...");
        this.userService.save();
    }
}

class UserService {
    constructor(private repository: Repository) { };
    save() {
        // console.log("Save product...");
        this.repository.save();
    }
}

class UserMongoRepository implements Repository {
    save() {
        console.log("Save user in the mongodb database...");
    }
}

class UserPostgresRepository implements Repository {
    save(): void {
        console.log("Save user in the postgres database...");
    }
}

class UserTestRepository implements Repository {
    save(): void {
        console.log("Save user in the test database...");
    }
}

const userMongoRepository = new UserMongoRepository();
const userService1 = new UserService(userMongoRepository);
const userController1 = new UserController(userService1);

const userPostgresRepository = new UserPostgresRepository();
const userService2 = new UserService(userPostgresRepository);
const userController2 = new UserController(userService2);

const userTestRepository = new UserTestRepository();
const userService3 = new UserService(userTestRepository);
const userController3 = new UserController(userService3);


userController1.save();
userController2.save();
userController3.save();

export { };