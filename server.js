const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/'));

// app.get('/*', function(req, res) {

//     res.sendFile(path.join(__dirname + '/dist/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8085);

const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/coreui-free-angular-admin-template'));

app.get('/*', function(req, resp) {
    resp.sendFile(path.join(__dirname + '/dist/coreui-free-angular-admin-template/index.html'));
});

app.listen(process.env.PORT || 8085);