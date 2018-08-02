const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const app = express();

app.set('port', process.env.PORT || 3000);

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
    target: process.env.PROXY_COMPONENT_MARCELLINO || 'http://127.0.0.1:3004'
    // changeOrigin: false
  })
);

// proxy to ricky server
app.use(
  '/api/rooms/:id/reviews',
  proxy({
    target: process.env.PROXY_COMPONENT_RICKY || 'http://127.0.0.1:3002'
    // changeOrigin: false
  })
);

// proxy to ozge server
app.use(
  '/api/rooms/:id/bookings',
  proxy({
    target: process.env.PROXY_COMPONENT_NICK || 'http://127.0.0.1:3001'
    // changeOrigin: false
  })
);

// proxy to ozge server
app.use(
  '/api/rooms/:id',
  proxy({
    target: process.env.PROXY_COMPONENT_OZGE || 'http://127.0.0.1:3003'
    // changeOrigin: false
  })
);

app.listen(app.get('port'), () =>
  console.log('Example app listening on port', app.get('port'))
);
