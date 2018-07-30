# TypeScript with Webpack

Typescript playground

## Symbol

* We have the existing primitive types of strings `Number` `Boolean` `null` `undefined` and now we have a new primitive type known as `Symbol`.
* The purpose of a symbol is to generate a unique ID.
* The ID is inaccessible. But we can pass an optional symbol description while creating a symbol and we can get access to the description.
* It doesn't matter what the description is, a Symbol is always going to create a unique ID.
* If you want to get hold of a symbol so that you can use it again in a different or the same file, then you need to add it to the built-in symbol registry using the Symbol.for("description") method.
* The Symbol.for("description") must have a "description" parameter. So, when this is executed it doesn't add the symbol right away. It checks first if a symbol with the same "description" is already exists in the registry. If it does exist then it will return that symbol over.
* A practical use of symbols is using it to create unique properties in an object. So, we never have to worry about our code conflicting with existing methods or being accidently overwritten.