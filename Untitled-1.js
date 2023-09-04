function clickMap(event) {
  // Get the element that was clicked.
  var element = event.target;

  // If the element is a path, open the corresponding URL.
  if (element.tagName === "path") {
    window.location.href = element.getAttribute("href");
  }
}

// Add an onclick event handler to the map.
document.querySelector("svg").addEventListener("click", clickMap);