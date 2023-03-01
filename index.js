const express = require('express')
const app = express()

const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World! Zenas Reis version 1'))

app.listen(port, (err) => {
    if (err) {
      console.log('Error::', err);
    }
      console.log(`Onexlab app listening on port ${port}`);
  });
