async function newFormHandler(event) {
    //This function gets triggered whenever a form submission occurs. It accepts an event object as a parameter.
    event.preventDefault();//This prevents the browser's default behavior of reloading the page when a form is submitted.

    const title = document.querySelector('input[name="post-title"]').value;
    //This selects the input field with the name "post-title" and extracts its value.
    const post_content = document.querySelector('textarea[name="post-content"]').value.trim();
    //This selects the textarea with the name "post-content" and extracts its value after 
    //trimming any extra white spaces from both ends.
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    //line 10 will sends a POST request to the "/api/posts" endpoint of the server. 
    //The fetch API is used to make HTTP requests from the browser. The request body includes 
    //a JSON string that contains the title and post_content values. It's also specified that 
    //the Content-Type of the request is application/json.
    if (response.ok) {
        //If the server responds with a status that indicates success (i.e., a status in the range 200-299),
        // the user is redirected to the "/dashboard" page. If the response indicates an error, an alert is 
        //shown to the user with the status text of the response.
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
//This code sets up an event listener for the form with the class "new-post-form". 
//The newFormHandler function will be called every time this form is submitted.