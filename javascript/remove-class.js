/*remove a class from an element with a certain id (only if the class is on the element)*/
function removeClass(id, className) {
    var element = document.getElementById(id);
    if (!element.classList.contains(className)) {
        return;
    }
    element.classList.remove(className);
}
removeClass("my-element", "my-class");
