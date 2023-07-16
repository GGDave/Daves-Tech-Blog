//the following adds logic when signing up
async function signupFormHandler(event) {
  event.preventDefault();//this line of code will prevent the page from refreshing when the form is 
  //submitted
  //const "username" and "password" retrieve the values entered into the input fields with IDs #username-login and #password-login,
  //trims any trailing or leading whitespace using .trim(), and assigns these values to the username and password constants, 
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    // This if statement retrieves the values entered into the input fields with IDs
    // #username-signup and #password-signup, trims any trailing or leading whitespace
    // using .trim(), and assigns these values to the username and password constants.
      const response = await fetch('/api/users', {
        // This function sends a POST request to the '/api/users' endpoint. This request will
        // create a new user with the provided username and password. The fetch
        // function is used to send this HTTP request, and the headers of this request indicate 
        //that the body data is in JSON format.
          method: 'post',
          body: JSON.stringify({
              username,
              password
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
        //This function checks the response. If it was successful (response.ok is true)
          document.location.replace('/dashboard');
          //it redirects the user to the dashboard using document.location.replace('/dashboard'). If the response was
      } else {
          alert(response.statusText);
          //not OK, it alerts the user with the status text of the response.
      }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
