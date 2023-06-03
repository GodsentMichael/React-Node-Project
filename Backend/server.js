const app = require('./app')

// Handling uncaught exception.
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down server for handling uncaught exception.`)
})

// Unhandled promise rejection.
process.on("unHandledRejection", (err) => {
    console.log(``)
})