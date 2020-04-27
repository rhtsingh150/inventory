const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const models  = require('./models');
var flash = require('connect-flash');

const bodyParser = require('body-parser');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});


    

/*  PASSPORT SETUP  */
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);
app.use(flash());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept , Authorization");
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods' , 'PUT , POST , PATCH , DELETE , GET');
        return res.status(200).json({});
    }
    next();
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  async function(username, password, done) {
    let user = await models.User.findOne({ where : { username: username } });
    console.log(user);
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (user.password == password ) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    if (user.varified == 'false') {
      return done(null, false, { message: 'Your account is not activated.' });
    }
    return done(null, user);
  }
));





const apiRoute = require('./routes/api');



// Set EJS as templating engine 
app.set('view engine', 'ejs'); 

app.use('/api' , apiRoute);


app.get('/', function(req, res){
  res.render('dashboard');
});

app.get('/login', function(req, res){
    res.render('login');    
});

app.get('/register', function(req, res){
  res.render('register');
});

app.get('/admin', function(req,res){
    res.render('admin');
});

app.post('/login', (req, res, next) => {
  passport.authenticate('local',
  (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect('/login?info=' + info.message);
    }

    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/');
    });

  })(req, res, next);
});

app.post('/register', async function(req, res){
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  let name = req.body.fullname;
  let gender = req.body.gender;

  let new_user = await models.User.create({ username : username , password : password , name : name , email : email , gender : gender , varified : 'false' });
  console.log(new_user);
  if(new_user){
    req.logIn(new_user, function(err) {
      if (err) {
        return err;
      }
      return res.redirect('/');
    });
  }
});


app.use('/' , express.static('public'));


// socket connection
io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});



http.listen('3000');
