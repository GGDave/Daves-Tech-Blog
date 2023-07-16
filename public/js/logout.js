//the following code adds logic when logging out
async function logout() {
    //The function sends a POST request to the '/api/users/logout' logging them out.
  const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: {
          'Content-Type': 'application/json'
      }
  });

  if (response.ok) {
       //After the fetch request, the function checks the response. If it was successful (response.ok is true)
      document.location.replace('/');
      //it redirects the user to the dashboard using document.location.replace('/'). If the response was
  } else {
      alert(response.statusText);
      //not OK, it alerts the user with the status text of the response.
  }
}

document.querySelector('#logout').addEventListener('click', logout);
//Lastly, outside the function, an event listener is added to the HTML element with the id #logout. 
//When this element is clicked, the logout function is called.