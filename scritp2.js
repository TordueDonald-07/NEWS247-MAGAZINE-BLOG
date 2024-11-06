function viewBlogPost(element) {
    const postElement = element.closest('.grid-item');
    const postTitle = postElement.getAttribute('data-title');
    const postContent = postElement.getAttribute('data-content');
    const postImage = postElement.getAttribute('data-image');

    // Store the blog post data in localStorage
    localStorage.setItem('blogPostTitle', postTitle);
    localStorage.setItem('blogPostContent', postContent);
    localStorage.setItem('blogPostImage', postImage);

    // Redirect to the blog details page
    window.location.href = 'blog-details.html';
}

window.onload = function() {
    // Get the stored data
    const postTitle = localStorage.getItem('blogPostTitle');
    const postContent = localStorage.getItem('blogPostContent');
    const postImage = localStorage.getItem('blogPostImage');

    // Display the data on the blog details page
    if (postTitle && postContent && postImage) {
        document.querySelector('.main-post-title').textContent = postTitle;
        document.querySelector('.main-post-content').innerHTML = postContent;
        document.querySelector('.main-post-featured-image').src = postImage;
    }
};
