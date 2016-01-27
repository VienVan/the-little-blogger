console.log('linked');

var button = document.getElementById('postBtn');
var posts = [];
var postCounter = 0;
var ul = document.getElementById('blog-list');
var h2 = document.getElementById('postCounter');

function addPostToArray() {
      var blogPost = document.getElementById('blog').value;
      posts.push(blogPost);
}

function createList() {
    for (var i = 0; i < posts.length; i++) {
      ul.innerHTML += "<li>" + posts[i] + "</li>";
      postCounter++;
  }
  h2.innerHTML = postCounter;
}

button.addEventListener('click', function(e) {
      e.preventDefault();
      addPostToArray();
      createList();
})
