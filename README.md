# SOLID Principles in OOP

## Single Responsibility Principle (SRP) - SOLID in TypeScript

This example demonstrates the **Single Responsibility Principle** in TypeScript, which states:

> **A class should have only one reason to change.**

This means that a class should do **only one thing**, and do it well. Responsibilities should be separated into different classes to make code more modular, maintainable, and testable.

---

## Open/Closed Principle (OCP) - SOLID in Java

This example demonstrates the **Open/Closed Principle** in Java, which states:

> **Software entities should be open for extension, but closed for modification.**

In this example:

- We define a common interface `Ipayment` that declares a method `processPayment`.
- We implement this interface in multiple payment classes like `CardPayment`, `UpiPayment`, etc.
- The `PaymentService` class depends on the abstraction (`Ipayment`) and not on concrete classes.

This design allows us to **add new payment methods** (by implementing new classes) without **modifying existing classes**, thus adhering to the Open/Closed Principle.

### Classes involved:

- `Ipayment` – interface defining the contract.
- `CardPayment`, `UpiPayment`, etc. – extend functionality without changing existing logic.
- `PaymentService` – works with any `Ipayment` implementation.
- `Main` – uses the service and passes any valid payment method.

By using polymorphism and dependency injection, the system is easily extendable and maintainable.

---