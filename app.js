console.log('linked');

var button = document.getElementById('changeText');
var blogPost = document.getElementById('blog').value;
var posts = [];

function addPosts() {
  var blogPost = document.getElementById('blog').value;
  posts.push(blogPost);
}
button.addEventListener('click', function() {
  addPosts();
})
