//the following function adds logic when editing a post
async function editFormHandler(event) {
    event.preventDefault();//this line of code will prevent the page from refreshing when the form is 
    //submitted

    const title = document.querySelector('input[name="post-title"]').value;
    //line 6 then retrieves the value entered into the input field named "post-title" and assigns it to the title constant.
    const post_content = document.querySelector('textarea[name="post-content"]').value.trim();
    //line 8 will get the contents of the textarea named "post-content", trims any whitespace from the ends with .trim(), 
    //and assigns it to the post_content constant.
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
        //this function will obtain the post id from the URL of the current page. The URL is converted to a string and 
        //split into an array at each '/' character. The last element of this array is stored in the variable post_id.
    ];

    const response = await fetch(`/api/posts/${post_id}`, {
        //If there is a title and content for the post, the function sends a PUT request to the '/api/posts/{post_id}' endpoint.
        // This request will then update the post identified by post_id with the new title and post_content.
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        //After the fetch request, the function checks the response. If it was successful (response.ok is true)
        document.location.replace('/dashboard');
        //it redirects the user to the dashboard using document.location.replace('/dashboard'). If the response was
    } else {
        alert(response.statusText);
        //not OK, it alerts the user with the status text of the response.
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
//Lastly, the function is set to be called whenever the form with class edit-post-form is submitted,
// using addEventListener('submit', editFormHandler).