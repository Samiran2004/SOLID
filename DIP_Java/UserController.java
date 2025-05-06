package DIP_Java;

public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    public void save() {
        userService.save();
    }
}
