var skills = document.querySelector("#skills");
var button = document.querySelector(".button");
var heading = document.querySelector("#heading");

fetchData(function(result) {
  // console.log("I got in the main.", result);
  button.addEventListener("click", function() {
    var h2 = document.createElement("h2");
    console.log(result);
    h2.textContent = result[0].slug;
    heading.appendChild(h2);
  });
});
