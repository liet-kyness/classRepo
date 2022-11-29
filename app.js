const click = document.querySelector("h1");

document.addEventListener('click', function(e) {
    preventDefault(e);
    alert("clicked");
});
