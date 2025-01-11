const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello, world!');
    })
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send('Internal Server Error');
    });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject(new Error('Simulated asynchronous error'));
      } else {
        resolve();
      }
    }, 1000);
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});