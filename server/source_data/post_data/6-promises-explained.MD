
Promises are an excellent feature of JavaScript that create a simple way to handle asynchronous functions like API calls. Promises are relatively simple, but they have some unique attributes that are important to understand.

Here is a promise at its most basic level. The code below does 2 interesting things, it runs the Promise function immediately, and the promise resolves after 5 seconds.
```
var noobPromise = new Promise(function(resolve, reject) {
  window.setTimeout(function() {
    console.log("timer over");
    resolve();
  }, 5000);
});
noobPromise // Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
// 5 seconds later
"timer over"
noobPromise // Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: undefined}
```

Now the important part of promises, the then method. This promise will resolve after 5 seconds, and then run the additional console.log in the then method.
var decentPromise = new Promise(function(resolve, reject) {
  window.setTimeout(function() {
    console.log("timer over");
    resolve();
  }, 5000);
}).then(function(){console.log("then something else")});
// Works exactly like before, but now the final output is:
decentPromise // Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
// 5 seconds later
"timer over"
"then something else"
decentPromise // Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: undefined}
```
** The most important part to understand is the * then * method **
Rarely do promises have to be created. A promise is typically a returned value from an asynchronous function like fetch. So understanding the *then* method and *then* chaining is the most common way of manipulating promises.

Here is the next evolution of the promise: passing data from the promise to the *then* method, and beyond. The *then* method will receive data from the promise based on what is passed to resolve() in the promise.
```
var goodPromise = new Promise( function(resolve, reject) {
  window.setTimeout(function() {
    console.log("timer over");
    resolve("pass that data!");
  }, 5000);
}).then(function(data){console.log("then something else &", data)});
goodPromise // Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
// 5 seconds later
"timer over"
"then something else & pass that data!"
goodPromise // Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: undefined}
```

The then method can be used multiple times as well! Whatever is returned by the *then* method will be passed on as the data to the next then method, allowing for *then* chaining. In fact, the value returned from a promise can only be accessed using the *then* method. There is no way to access the value of a promise directly because it is a private variable.
```
var betterPromise = new Promise( function(resolve, reject) {
  window.setTimeout(function() {
    console.log("timer over");
    resolve("pass that data!");
  }, 5000);
}).then(function(data){
  console.log("then something else & ", data);
  return " ... then the last thing";
}).then(function(data){
  console.log(data);
});
betterPromise // Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
// 5 seconds later
"timer over"
"then something else & pass that data! ... then the last thing"
betterPromise // Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: undefined}
```

The next step in working with promises is returning an entire promise and calling the *then* method on it in a different place. Passing an entire promise can be a very useful way of transferring data.

```
var advancedPromise = function() {
  return new Promise(function(resolve, reject) {  //return an entire promise from a function.
    window.setTimeout(function() {
      console.log("timer over");
      resolve("pass that data!");
    }, 5000);
  });
};

var advancedPromiseAssigned = advancedPromise().then(function(data) {
  console.log("then something else & ", data);
  return " ... then the last thing";
});

advancedPromiseAssigned.then(function(data) {
  console.log(data);
});
```

This allows for promise data to be passed along and manipulated easily after being received from an API or other asynchronous function.

Additional excellent resources for promises:
(JavaScript Promises - There and Back Again)[http://www.html5rocks.com/en/tutorials/es6/promises/]
(JavaScript Promises from Mozilla)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise]



