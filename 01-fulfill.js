require('es6-promise')

// Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
// executor after a delay of 300ms, using setTimeout.
//
// Then, print the contents of the promise after it has been fulfilled by passing
// console.log to then.

const promise = new Promise((fulfill, reject) => {
  const msg = 'FULFILLED!'
  const delay = 300
  setTimeout(() => { fulfill(msg) }, delay)
})

const onFulFilled = (resp) => {
  console.log(resp)
}

const onRejected = (error) => {
  console.log(error.message)
}

promise.then(onFulFilled, onRejected)
