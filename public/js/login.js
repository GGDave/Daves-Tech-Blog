//the following adds logic when logging in
async function loginFormHandler(event) {
  event.preventDefault();//this line of code will prevent the page from refreshing when the form is 
  //submitted
  //const "username" and "password" retrieve the values entered into the input fields with IDs #username-login and #password-login,
  //trims any trailing or leading whitespace using .trim(), and assigns these values to the username and password constants, 
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    //This if statement checks whether both username and password fields contain values.
    
      const response = await fetch('/api/users/login', {
        //This function sends a POST request to the '/api/users/login' endpoint. This request
        //is intended to authenticate the user with the provided username and password. The fetch
        //function is used to send this HTTP request.
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
        //After the fetch request, the function checks the response. If it was successful (response.ok is true)
          document.location.replace('/dashboard');
          ///it redirects the user to the dashboard using document.location.replace('/dashboard'). If the response was
      } else {
          alert(response.statusText);
          //not OK, it alerts the user with the status text of the response.
      }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
