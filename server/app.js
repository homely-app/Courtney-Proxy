const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const app = express();

// redirect from home page
app.get('/', function(req, res) {
  console.log('index hit');
  res.redirect('/rooms/1');
});

// server assests
app.use(express.static('public'));

// render html that houses react
app.get('/rooms/:id', function(req, res) {
  const reactPath = path.join(__dirname, '../public/index.html');
  res.sendFile(reactPath);
});

// proxy to marcellino server
app.use(
  '/api/rooms/:id/photos',
  proxy({
    target: 'http://127.0.0.1:3004'
    // changeOrigin: false
  })
);

// proxy to ozge server
app.use(
  '/api/rooms/:id',
  proxy({
    target: 'http://127.0.0.1:3003'
    // changeOrigin: false
  })
);

// proxy to ricky server
app.use(
  '/api/reviews/:id',
  proxy({
    target: 'http://127.0.0.1:3002'
    // changeOrigin: false
  })
);

// // proxy to ozge server
// app.use(
//   '/api/rooms/:id',
//   proxy({
//     target: 'http://127.0.0.1:3003'
//     // changeOrigin: false
//   })
// );

app.listen(3000, () => console.log('Example app listening on port 3000!'));
