var skills = document.querySelector(".skills");
var button = document.querySelectorAll("button");
console.log(button);

fetchData(function(result) {
  // console.log("I got in the main.", result);
  button.forEach(function(elem) {
    elem.addEventListener("click", function() {
      var h2 = document.createElement("h2");
      h2.textContent = result[0].slug;
      skills.appendChild(h2);
    });
  });
});

fetchData2(function(result) {
  // console.log("I got in the main.", result);
  button.forEach(function(elem) {
    elem.addEventListener("click", function() {
      var image = document.createElement("img");
      image.textContent = result[0].slug;
      skills.appendChild(image);
    });
  });
});
