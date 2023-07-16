//the following code will add logic when submitting comments
async function commentFormHandler(event) {
    event.preventDefault();//this line of code will prevent the page from refreshing when the form is 
    //submitted

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    // line 6 will finds the textarea with the name "comment-body", retrieves its value,
    // and trims whitespace from the ends with .trim(). 
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
        //line 9 determines the post_id from the URL of the current page. It does this by splitting 
        //the URL into segments with .split('/') and taking the last segment.
    ];

    if (comment_text) {
        //when txt is inserted this statement makes a POST request to '/api/comments' with a payload containing post_id and comment_text.
        //The headers indicate that the request body is in JSON format.
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
            //this if statement checks the response. If it was successful (response.ok is true), 
            //it reloads the page using document.location.reload(). If the response was not OK,
            // it alerts the user with the status text of the response.
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
//Lastly, the function is set to be called whenever the form with class comment-form is submitted,
// using addEventListener('submit', commentFormHandler), Adding a <script> tag at 
//the end of the HTML body.