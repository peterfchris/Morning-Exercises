# Week 3 Day 2 - This and Context

## Goal

The `this` keyword is probably the most confusing part of JS. This exercise is to help clear up in a small portion what it is and how it works.

## Teacher notes

The reason an HTML doc is used for this is because repl.it does not like you accessing the global this and throws an error. 

This is the first time students are exposed to the `this` keyword, so take it slow and take time for it to sink in. 
This one requires a good amount of knowledge of `this` and how it works when we move the fn of the object. `this` will always be the object to the immediate left of the function being invoked. That is always the case, not just when we have a method on an object. Technically when you just have a function on the global scope `this` is the window/global object. On step 2 when we save the method to the fn we can also invoke it using as saving it to `window.fn = fn`. This means if we have an object called state on the global scope the function will use that one, but only if you use var, not let or const. You may also be tempted to use an arrow function for the method, `this` will always be the window and can not be rebound. On step 4 when we set it as a property of the props object `this` becomes the prop object, not personTwo, because `personTwo.props.fn` props is immediately to the left.

