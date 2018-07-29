# TypeScript with Webpack

Typescript playground

## Weak Sets

* In a strong set, if we assign null to an object, a referance to the object still exists in the set. And it can be easily retrieved like this: `obj = [...mySet][0]`.
* To avoid memory leaks, we would prefer that the reference in a set to disappear as well. For this purpose, we use the `WeakSet()` instead of `Set()`.
* Weak sets can only store object references.
* In a weak set, if we assign null to an object, a reference to the object is no longer accessible.
* The advantage of weak set over a strong set is that memory is handled properly. So, if we have only to track the references to objects and nothing more than that then a weak set should be preferred over a strong set.