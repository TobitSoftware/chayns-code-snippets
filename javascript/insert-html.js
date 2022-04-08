/*Add text or html to the end of an element by its id*/
function addHTML(id, text) {
    var element = document.getElementById(id);
    element.innerHTML = element.innerHTML + text;
}

addHTML("my-element", '<p>inserted html</p>');
