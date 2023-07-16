//The following function is a middleware function that will help whit authentication logic
const withAuth = (req, res, next) => {//This is a middleware function that takes three parameters: req (the request object), 
  //res (the response object), and next (a function that calls the next middleware in the stack).

  //Inside the function, it checks if req.session.user_id exists. The req.session object is a way to store data that's accessible
  // across multiple user requests (sessions). Here, user_id is being used to check whether the user is logged in.
  if (!req.session.user_id) {
      res.redirect('/login');//If req.session.user_id does not exist (meaning the user is not logged in),
      // res.redirect('/login') is called to redirect the user to the login page.
  } else {
      next();//If req.session.user_id does exist (meaning the user is logged in), next() is called, which allows the request to 
      //proceed to the next middleware function (or to the route handler, if no more middleware functions are in the queue).
  }
};

module.exports = withAuth;
//Using module export allows us to use this function in other parts of the code