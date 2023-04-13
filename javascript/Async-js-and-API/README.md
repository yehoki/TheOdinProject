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


