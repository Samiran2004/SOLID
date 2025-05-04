class BaseUser {
    getRole() { };
}

class User extends BaseUser {
    getAccessLevel() {
        console.log("User access level...");
    };

    getRole() {
        console.log("User role...");
    }
}

class Admin extends User {
    getAccessLevel(): void {
        console.log("Admin access level...");
    }

    getRole(): void {
        console.log("Admin role...");
    }
}

class Manager extends User {
    getAccessLevel(): void {
        console.log("Manager access level...");
    }

    getRole(): void {
        console.log("Manager role...");
    }
}

class Customer extends BaseUser {
    getRole(): void {
        console.log("Customer role...");
    }
}

function getUserAccessLevel(user: User) {
    user.getAccessLevel();
}

getUserAccessLevel(new User());
getUserAccessLevel(new Admin());
getUserAccessLevel(new Manager());
// getUserAccessLevel(new Customer());