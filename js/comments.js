// load comments
const loadComments = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => displayComments(data))
};
loadComments();

// display comments
const displayComments = comments => {
    // console.log(comments);
    const commentsParent = document.getElementById("comments");
    comments.forEach(comment => {
        // console.log(comment);
        const div = document.createElement("div");
        div.classList.add("comment");
        div.innerHTML = `
        <h2>Your Name: ${comment.name}</h2>
        <p>Your Comment: ${comment.body}</p>
        <button onclick="loadCommentDetails(${comment.id})">See Your Comment Details</button>` // pass different id by onclick
        commentsParent.appendChild(div);
    })
};

// load comment details
const loadCommentDetails = id => {
    // console.log(id);
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => res.json())
        .then(data => displayCommentDetails(data))
};

// display comment detail
const displayCommentDetails = details => {
    // console.log(details);
    const commentDetails = document.getElementById("comment-details");
    commentDetails.innerHTML = `
    <h3>Comment time: ${new Date()}</h3>
    <h3>Comment Number: ${details.id}</h3>
    <h4>Your Name: ${details.name}</h4>
    <h4>Your Email: ${details.email}</h4>`
};