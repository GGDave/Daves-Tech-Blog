//the following function will add logic when deleting a post
async function deleteFormHandler(event) {
    event.preventDefault();//this line of code will prevent the page from refreshing when the form is 
    //submitted

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
        //this function obtains the post id from the URL of the current page. The URL is converted to a string and split
        //into an array at each '/' character. The last element of this array is stored in the variable post_id.
    ];
    //The following line performs an HTTP DELETE request using the fetch API.
    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE'
        //This request is sent to /api/posts/${post_id}, 
        //where ${post_id} is the id of the post that was just fetched from the URL. "await fetch" will allow the function to 
        //wait for the response from the server before moving to the next line of code.
    });

    if (response.ok) {
        document.location.replace('/dashboard');
        //This if statement handles the server's response to the DELETE request. If the request was successful
        // (indicated by response.ok), the page is redirected to '/dashboard' using document.location.replace('/dashboard'). 
    } else {
        alert(response.statusText);
        //If the request was not successful, an alert is shown to the user with the status text of the response. 
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
//Lastly, outside the function, an event listener is added to the HTML element with the class delete-post-btn.
// When this element is clicked, the deleteFormHandler function is called.