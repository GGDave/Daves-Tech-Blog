//The following code will add logic when creating a post
async function createPostHandler(event) {
    event.preventDefault();//this line of code will prevent the page from refreshing when the form is 
    //submitted
    document.location.replace('/dashboard/new')
    //The function then changes the current page to '/dashboard/new' using document.location.replace('/dashboard/new').
    //This navigates the user to a new URL path as if they have manually entered it in the browser's address bar. 
    //taking the user to the dashboard where they can create a new post. Using replace()  won't let the user go back
    // to the previous page using the back button because it replaces the current page in the history stack.
}
document.querySelector('#create-new-post').addEventListener('click', createPostHandler);
// lastly the function is set to be called whenever the HTML element with the id create-new-post is clicked, 
//using addEventListener('click', createPostHandler).