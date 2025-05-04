class BaseBird {
    makeSount() { }
}

class Bird extends BaseBird {
    fly() {
        console.log("Bird fly!");
    }

    makeSount() { }
}

class Sparrow extends Bird {
    fly(): void {
        console.log("Sparrow fly!");
    }
    makeSount(): void {
        console.log("Sparrow sound....");
    }
}

class Penguine extends BaseBird {
    makeSount(): void {
        console.log("Penguine sound...");
    }
}

function makeBirdFly(bird: Bird) {
    bird.fly();
}

makeBirdFly(new Sparrow());