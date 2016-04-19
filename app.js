console.log('linked');

var button = $('#postBtn');
var posts = [];
var postCounter = 0;
var ul = $('#blog-list');
var h2 = $('#postCounter');


function addPostToArray() {
  var blogPost = $('#blog').val();
  posts.push(blogPost);
}


function createList() {
  var text = '';
  for (var i = 0; i < posts.length; i++) {
    text += "<li>" + posts[i] + "</li>";
    localStorage.setItem('Post ' + i, posts[i]);
  }

  postCounter++;
  ul.html(text);
  h2.html(postCounter + ' posts');
  if (postCounter === 6) {
    window.location.reload();
  }
}

button.on('click', function(e) {
  console.log("hitting the button");
  e.preventDefault();
  addPostToArray();
  createList();
  // addToLocalStorage();
})

$('#clearBtn').on('click', function() {

  localStorage.clear();
  window.location.reload();
})
