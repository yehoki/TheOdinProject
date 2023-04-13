# Async JavaScript and APIs

## Callback

A **Callback** function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

## Promise

Simply put, a promise is the same in JavaScript as it is in the real world - it is the agreement that an action will be complete, or attempted to complete, and return the result.
A nice example given in TOP's video was regarding going to the store to get a product. You go to the store, check whether or not the product is there: if it's there, you buy it and come back home with it; otherwise you come back home empty-handed with an explanation that it was not in the store.

As well described in [You don't know JavaScript](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md#future-value) - a Promise can return either a success or a failure value, we exchange our promise for a placeholder which in turn we want to exchange for the future value - whether or not it is success or failure.


## API

API stands for `Application Programming Interface`, and they are servers which serve date for external use - mostly used to communicate between the front and the back end of an application.
When requesting data from an API, we need an API key - this allows you to authenticate and identify your use when requesting API calls. In the greater scheme of things, it prevents fraudulent activity as well as limits the number of calls users can make.
Storing your API key is extremely important, especially if you are using a paid tier for an API.

## Fetch

The `fetch` function does what it sounds like - it fetches some data from a `URL` - Unique Resource Locator.
Calling the fetch function returns a `Promise`, so we can use `.then`, `.catch` and `.finally` methods on it in order to determine what happens after successful and unsuccessful promise resolutions.

## CORS
**Cross Origin Reousrce Sharing**, `CORS` for short, allows restricted resources on a web page, to be requested from a different domain than it was originally served.
While using the `fetch` function, we just need to include a second option parameter, which is optional, but include a mode of cors:

```JS
fetch(URL, {
    mode: 'cors'
});
```

## Async & Await

When writing asynchronous code, JavaScript has two extremely useful keywords which we can use to help us out: `async` and `await`.

The `async` keyword tells the JS engine we are declaring an asynchronous function, when it is declared with `async`, it automatically returns a `promise`.
When a value is returned from the `async` function, that is equivalent to successfully resolving a `promise` - similarly when we throw an `error` that means the `promise` was rejected.
We refer to the `async` keyword as *Syntatical sugar* for promises.

The `await` keyword, when used inside an `async` function, tells JS to only continue the function **ONLY** once the `await` line of code is complete.
In other words, it tells JS to wait until the asynchronous action to finish before continuing the function - it is similar to the `.then` method on a promise, except when using `await` we instead assign the result to a variable, and so we can use the value elsewhere in the function.

One important thing to note is that we can have `async` without `await` - **HOWEVER** we **CANNOT** have `await` without `async`, as it only works inside an `async` defined function.

Within an asynchronous function, as we saw before with the `.catch()` method on promises, we can handle when the promise gets rejected and we get an error.
Similarly, with `async` and `await`, we can use a `try`/`catch` block, which is very intuitive from the wording:
```JS
async function functionName() {
    try {
        // Code to attempt with an `await` variable
    } catch (error) {
        // Code when the promise while awaiting the response fails - returns an error object which tells us more about the error.
    }
}
```