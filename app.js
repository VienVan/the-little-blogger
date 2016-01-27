console.log('linked');
var blog = document.getElementById('blog-post').value;
var form = document.querySelector('#button');


form.addEventListener('clicked', function(e) {
    console.log(blog);
})