/*
When writing the following JavaScript make sure to place it in a separate JS file.
*/

// JavaScript
let comments = [];

function submitForm() {
    /*
    To get the data inputted into the text boxes, the “value” property can be used.
    */
    let userHandle = document.getElementById('userHandle').value;
    let userComment = document.getElementById('userComment').value;

    /*
    Check if the user’s handle is “hacker”, if it is then don’t post the comment!
    */
    if (userHandle.toLowerCase() !== "hacker") {

        /*
        Store the user inputted comment data into an object
        */
        let commentData = {
            handle: userHandle,
            comment: userComment,
            // save timestamp
            timestamp: new Date().toLocaleString()
        };

        /*
        Each time a comment is added, the object created should be stored in an array.
        */
        comments.push(commentData);


        // Get the 'commentSection' div
        let commentSection = document.getElementById('commentSection');

        // Clear the 'commentSection' div
        commentSection.innerHTML = '';

        /*
        Using a for loop
        */
        // Loop through all comments in the 'comments' array (last-to-first)
        for (let i = comments.length - 1; i >= 0; i--) {

            // Get the hidden 'commentCard' div
            let template = document.getElementsByClassName('commentCard')[0];
            // .getElementsByClassName() returns an array of elements of the same class
            // The first element is called by the array index [0]

            // Copy the commentCard div including children (deep)
            let clone = template.cloneNode(true);

            // Make the new card visible removing the bootstrap class name
            clone.classList.remove('d-none');

            // Fill in each user's handle and comment
            clone.getElementsByClassName('input1')[0].innerHTML = comments[i].handle;
            clone.getElementsByClassName('input2')[0].innerHTML = comments[i].comment
                // append timestamp
                + '<br><span class="timestamp">- ' + comments[i].timestamp + '</span>';


            /*
            All the comments should be refreshed and displayed underneath as each new comment
            is added
            */
            // Append each cloned div to the 'commentSection' div
            commentSection.appendChild(clone);
        }
    } else {
        alert('go away hacker ☠')
    }

    /*
    Finally, each time a comment is posted, the form should be cleared, in preparation for the next
    comment.
    */
    document.getElementById('userHandle').value = '';
    document.getElementById('userComment').value = '';
}