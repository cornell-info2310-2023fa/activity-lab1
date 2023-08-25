const express = require('express');
const app = express();
const port = 3000;

// serve static resources
app.use(express.static('public'));

// render resource server-side
app.get('/render-server-side', (req, res) => {
  var html_pre_body = `<!DOCTYPE html>
<html>

<head>
  <title>SSR Website</title>
</head>

<body>
  <h1>Dynamic Website</h1>
  <p>This is a <strong>server-side rendered</strong> website.</p>
  <p>`

  var html_post_body = `</p>
</body>

</html>`

  var current_date = new Date().toString();

  res.set('Content-Type', 'text/html');
  res.send(html_pre_body + current_date + html_post_body);
})

// start the web server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
