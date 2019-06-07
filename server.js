var express = require('express');
var app = express();



app.use(express.static(__dirname + '/build'));

// app.use('/',function (req, res, next) {
//   res.send(renderHTML())
// })

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

// function renderHTML(init) {
//   return(
//     `<!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="utf-8" />
//         <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, shrink-to-fit=no"
//         />
//         <meta name="theme-color" content="#000000" />
        
//         <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        
//         <title>Бурение скважин на воду в Беларуси</title>
//         <link href="/static/css/main.c7f7ef13.chunk.css" rel="stylesheet">
//       </head>
//       <body>
//         <noscript>You need to enable JavaScript to run this app.</noscript>
//         <div id="root">scsc${init}</div>

//         <script src="/static/js/2.cc42c2aa.chunk.js"></script>
//         <script src="/static/js/main.1beb6ace.chunk.js"></script>
        
//       </body>
//     </html>`
//   )
// }