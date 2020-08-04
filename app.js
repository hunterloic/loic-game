const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const events = require('./events');

app.use(morgan('dev'));
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: true,
}));

app.set('view engine', 'ejs');

// Allow CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Autorization');
    if(req.method == 'OPTIONS')
    {
        req.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use((req, res, next) => {
    try {
        if(req.url == '/login') {
            next();
        } else {
            if(!req.session.username || req.session.username == "") {
                req.session.username = "";
                req.session.happy = 0;
                req.session.food = 0;
                req.session.strength = 0;
                res.redirect("/login");
            }
        }
        next();
    } catch(ex) {
        console.log(ex);
        res.status(500).send(ex);
    }
});


function returnMaxOrValue(value) {
    return (value > 10 ? 10 : value)
}
function returnMinOrValue(value) {
    return (value < 0 ? 0 : value)
}

app.get('/', (req, res, next) => {
    try {

        let result = "";

        if(req.query.eventId) {
            
            let previousEvent = events[parseInt(req.query.eventId) - 1];

            if(req.query.actionType == "yes") {
                req.session.food += previousEvent.yes.food;
                req.session.happy += previousEvent.yes.happy;
                req.session.strength += previousEvent.yes.strength;
                result += previousEvent.yes.result;
            }

            if(req.query.actionType == "no") {
                req.session.food += previousEvent.no.food;
                req.session.happy += previousEvent.no.happy;
                req.session.strength += previousEvent.no.strength;
                result += previousEvent.no.result;
            }

            req.session.food = returnMaxOrValue(req.session.food);
            req.session.food = returnMinOrValue(req.session.food);
            req.session.happy = returnMaxOrValue(req.session.happy);
            req.session.happy = returnMinOrValue(req.session.happy);
            req.session.strength = returnMaxOrValue(req.session.strength);
            req.session.strength = returnMinOrValue(req.session.strength);

        }

        let event = events[0];

        let status = {
            food : req.session.food,
            happy : req.session.happy,
            strength : req.session.strength
        }

        res.render(
            'index', 
            { 
                username: req.session.username,
                event: event,
                status: status,
                result : result,
                isWinner : (req.session.food == 10 && req.session.happy == 10 && req.session.strength == 10) ? "1" : "0",
                isLooser : (req.session.food == 0 || req.session.happy == 0 || req.session.strength == 0) ? "1" : "0"
            }
        );
    } catch(ex) {
        console.log(ex);
        res.status(500).send(ex);
    }
});

app.get('/login', (req, res, next) => {
    try {
        res.render('login');
    } catch(ex) {
        console.log(ex);
        next(new Error(ex));
    }
});

app.post('/login', (req, res, next) => {
    try {
        req.session.username = req.body.username;
        req.session.happy = 5;
        req.session.food = 5;
        req.session.strength = 5;
        res.redirect("/");
    } catch(ex) {
        console.log(ex);
        next(new Error(ex));
    }

});

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
    
});

module.exports = app;
