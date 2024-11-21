//Develop a JAVA program to create a class named shape create three subclasses namely: circle, triangle and square, each class has two
//member functions named draw() and erase(). Demonstrate polymorphism concepts by developing suitable methods, defining data and main
//program.

public class LABIA {
    public static void main(String[] args) {
        Shape s = new Shape();
        s.draw();
        s.erase();
        s = new Circle();
        s.draw();
        s.erase();
        s = new Triangle();
        s.draw();
        s.erase();
        s = new Square();
        s.draw();
        s.erase();
    }
}

class Shape {
    void draw() {
        System.out.println("Drawing Shape");
    }

    void erase() {
        System.out.println("Erasing Shape");
    }
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing Circle");
    }

    void erase() {
        System.out.println("Erasing Circle");
    }
}

class Triangle extends Shape {
    void draw() {
        System.out.println("Drawing Triangle");
    }

    void erase() {
        System.out.println("Erasing Triangle");
    }
}

class Square extends Shape {
    void draw() {
        System.out.println("Drawing Square");
    }

    void erase() {
        System.out.println("Erasing Square");
    }
}

// Output:
// Drawing Shape
// Erasing Shape
// Drawing Circle
// Erasing Circle
// Drawing Triangle
// Erasing Triangle
// Drawing Square
// Erasing Square
