# TypeScript with Webpack

Typescript playground

## Symbol iterator
* The for of statement is used to loop over iterables. it can't be used with all types of objects.
* For an object to work with for of loop, it needs to have a special method. This special method is called as the iterator method.
* To know if an object has an iterator method is by checking to see if the object has a method defined for the key Symbol.iterator.
* We can write our own special iterator method so that even an object (that has properties and values) can be used with the for of loop.

## How it works? (Iterables and Iterators)
Iteration revolves around two key concepts: iterables and iterators.

An Iterable is any object that implements a method whose key is a Symbol.iterator and this method returns an iterator.

    Iterable {
        [Symbol.Iterator]() : Iterator
    }

An Iterator is an object that is going to implement a next method and this method knows how to access elements in a collection; be it an Array or String or Map or Set and it returns an Object that contains Iteration Results as properties.

    Iterator {
        next() : IResultObj
    }

This first property is a value that could be of any data type and this value is going to be the actual value within the collection. The second property is a Boolean flag called done. So, if done is true the iteration is complete, if done is false then there are more elements to be iterated over.

    IResultObj {
        value: any
        done: Boolean
    }

## Example: Create a custom iterator that works with array
As it is already mentioned in es2015 array, strings, maps and sets are all iterables but to understand better about iterators let's create our own custom iterator that works with arrays.