console.log('linked');

var button = document.getElementById('changeText');
var posts = [];
var ul = document.getElementById('blog-list');
function addPostToArray() {
      var blogPost = document.getElementById('blog').value;
      posts.push(blogPost);
}

function createList() {
  for (var i = 0; i < posts.length; i++) {
    ul.innerHTML += "<li>" + posts[i] + "</li>";
    console.log(posts[i]);
  }
}

button.addEventListener('click', function() {
      addPostToArray();
      createList();
})
