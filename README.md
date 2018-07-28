# TypeScript with Webpack

Typescript playground

## Class Inheritance

* Extending a class inherits all its methods including the constructor method.
* Creating an instance from the derived class will invoke the constructor method of the parent class.
* If you create a constructor method in the derived class, then you need to introduce it with a super call function. Why? Because the parent class constructor needs to be called before the subclass constructor, and this ensures that if you call any method on the parent class in the constructor the parent has already successfully set up. So, the super call is going to invoke the constructor of the parent class.

## Summary

* We mainly focus on two key words, the `extends` and the `super` key words.
* The extends keyword is use to inherit from the parent class.
* The super keyword is used to invoke the constructor of the parent class and is also used to get access to the methods that are defined the parent class from within the derived class.