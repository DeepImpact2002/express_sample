var express = require('express');
var bodyParser = require('body-parser')



var app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
/**
 * middleware
 */
// if access with name of filename, then responses the files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// app.get('/', function(req, res) {
//     res.render('index', {title: 'title'});
// })  
// //　ルートにアクセスした場合のルーティング
// app.get('/', function(req, res) {
//     res.send('hello world');
// });
// // if accessed to /about
// app.get('/about', function(req, res) {
//     res.send('all about kenta');
// });
// // param with options
// app.get('/users/:name?', function(req, res) {
//     if(req.params.name) {
//         res.send('hello ' + req.params.name);
//     } else {
//         res.send('hello annonymous');
//     }
// });
// // param with usages of regular expression
// app.get('/items/:id([0-9:]+)', function(req, res) {
//     res.send('item no: ' + req.params.id);
// });
// // response a file
// app.get('/hello.txt', function(req, res) {
//     res.sendfile(__dirname + '/public/hello.txt');
// });
app.get('/new', function(req, res) {
    res.render('new');
});

app.post('/create', function(req, res) {
    res.send(req.body.name);
});

app.listen(3000);
console.log('server is listening');