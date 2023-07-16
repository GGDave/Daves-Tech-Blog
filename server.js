//The following lines of code will be importing npm's for setting up an express server 
const path = require('path');//This line will allow us to work with the directory parths
const express = require('express');//here we import the express framework
const routes = require('./controllers');//here we import the controllers directory, allowing us to work with our
// url paths
const sequelize = require('./config/connection')//this line imports sequilze and allows us to log 
//in to our database
const helpers = require('./utils/helpers');//here we iport helpers to help with additional tasks
const exphbs = require('express-handlebars');//here we import handlebard engine, allowing us modify our html content
const hbs = exphbs.create({helpers});// this line allows us to register our helpers
const session = require('express-session');//here we import the epress session middleware
const SequelizeStore = require('connect-session-sequelize')(session.Store);//this line of code will allow managing of express //sessions

const sess = {//this block of code allows us to configure our session parameters
    secret: process.env.DB_SECRET,//sets up a ID cookie
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
        //the following are time intervals of how ofterthe session store will check for expired sessions
        checkExpirationInterval: 1000 * 60 * 10, //this will check every 10 minute
        expiration: 1000 * 60 * 30 //this will expire after 30 minutes
    })
};

const app = express();//this initializes a new instance of Express and assigns it to the variable app.
const PORT = process.env.PORT || 3000; //sets the port the application will use

app.engine('handlebars', hbs.engine);//This tells Express to use the hbs Handlebars engine that was setup before for rendering views.
app.set('view engine', 'handlebars');//This sets the default view engine to 'handlebars'.

app.use(session(sess));
//line 34 tells Express to use the session middleware with the sess configuration object.
app.use(express.static(path.join(__dirname, 'public')));
//line 36 sets up Express to serve static files from the public directory.
app.use(express.json());//This is middleware provided by Express to parse incoming requests with JSON.
app.use(express.urlencoded({extended: true}));
//line 39 will allow middleware provided by Express to parse incoming requests with urlencoded.
app.use(routes);
//line 41 tells Express to use the routes that were imported at the top of the file.
sequelize.sync();
//line 43 will syncs all defined models to the database by creating the tables if
// they do not exist. It does not drop existing tables or data.
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
//line 46 starts the Express app on the specified port and logs a message to the console once the server starts listening.
