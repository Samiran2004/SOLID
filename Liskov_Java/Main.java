package Liskov_Java;

public class Main {
    public class BaseBird {
        public void makeSound() {
        };
    }

    public class Bird extends BaseBird {
        public void fly() {
            System.out.println("Bird fly...");
        }

        @Override
        public void makeSound() {
            System.out.println("Bird sound...");
        }
    }

    public class Sparrow extends Bird {
        @Override
        public void fly() {
            System.out.println("Sparrow fly...");
        }

        @Override
        public void makeSound() {
            System.out.println("Sparrow sound...");
        }
    }

    public class Penguine extends BaseBird {
        @Override
        public void makeSound() {
            System.out.println("Penguine sound...");
        }
    }

    public static void makeFly(Bird bird) {
        bird.fly();
    }

    public static void makeSound(BaseBird bird) {
        bird.makeSound();
    }

    public static void main(String[] args) {
        Main newMain = new Main();
        Bird bird = newMain.new Bird();
        makeFly(bird);
        makeSound(bird);

        Sparrow sparrow = newMain.new Sparrow();
        makeFly(sparrow);
        makeSound(sparrow);

        Penguine penguine = newMain.new Penguine();
        // makeFly(penguine);
        makeSound(penguine);
    }
}