# 🚀 SOLID Principles in OOP (TypeScript & Java)

This repository contains theoretical explanations of the core **SOLID Principles** of Object-Oriented Programming with references to both **TypeScript** and **Java**.

---

## 🧱 What is SOLID?

**SOLID** is an acronym that stands for five key principles of object-oriented design, introduced by Robert C. Martin (Uncle Bob), to help developers create software that is easier to maintain and extend.

- **S** – Single Responsibility Principle (SRP)
- **O** – Open/Closed Principle (OCP)
- **L** – Liskov Substitution Principle (LSP)
- **I** – Interface Segregation Principle (ISP)
- **D** – Dependency Inversion Principle (DIP)

---

## ✅ 1. Single Responsibility Principle (SRP)

> **Definition**: A class should have only one reason to change.

This principle emphasizes that a class should have only one job or responsibility. Splitting responsibilities across multiple classes improves maintainability and makes the system easier to test, debug, and understand.

---

## ✅ 2. Open/Closed Principle (OCP)

> **Definition**: Software entities (classes, modules, functions) should be open for extension but closed for modification.

The OCP encourages designing modules that can be extended (e.g., by adding new classes or behavior) without altering existing source code. This leads to more robust systems that are less prone to bugs when changes are made.

---

## ✅ 3. Liskov Substitution Principle (LSP)

> **Definition**: Subtypes must be substitutable for their base types without altering the correctness of the program.

This principle ensures that a subclass can stand in for its superclass without breaking the functionality. Violating LSP leads to fragile code and unexpected behavior when polymorphism is used.