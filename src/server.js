require('@babel/register')();

['.css', '.less', '.sass', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});
const express = require('express');
const app = express();

const render = require('./render').default;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Cashflow Financial Statement</title>
      </head>
      <body>
        <div id="financialStatement">${render()}</div>
      </body>
    </html>
  `)
});

app.listen(3000, () => console.log('Server is ready on 3000'));
