/*Add a class to an element with a certain id (only if the class is not yet on the element).*/
function addClass(id, className) {
    var element = document.getElementById(id);
    if (element.classList.contains(className)) {
        return;
    }
    element.classList.add(className);
}
addClass("my-element", "my-class");
