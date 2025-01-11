# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections within asynchronous route handlers.  Unhandled rejections can lead to application crashes or unpredictable behavior.

## The Problem

The `bug.js` file shows an Express.js app with a route handler that performs an asynchronous operation.  This operation simulates a scenario where the operation might fail.  If it fails, the rejection is not properly handled, leading to an unhandled promise rejection.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle potential errors in asynchronous operations within route handlers.  It uses `.catch()` to gracefully handle rejections, preventing crashes and providing informative error messages.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install express` to install the required dependencies.
4. Run `node bug.js` to observe the unhandled rejection. You may need to run the application multiple times to simulate the error (it's 50/50).
5. Run `node bugSolution.js` to see the corrected version with proper error handling.