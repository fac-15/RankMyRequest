var skills = document.querySelector(".skillInfo");
var button = document.querySelectorAll("button");

fetchData(function(result) {
  // console.log("I got in the main.", result);
  button.forEach(function(elem) {
    elem.addEventListener("click", function() {
<<<<<<< HEAD
    var image = document.createElement('img');
    image.src = result[0].acf['featured_image'].url;
    image.style.width = '70px';
    image.style.height = '70px';
    skills.appendChild(image);

    var p = document.createElement("p");
    p.textContent = result[0].title.rendered;
    skills.appendChild(p);
    

    var title = document.createElement('p');
    title.textContent = result[0].acf['featured_image'].title;
    skills.appendChild(title);

    var link = document.createElement('a');
    link.textContent = 'Click the link to see more work'
    link.href = result[0].link;
    skills.appendChild(link);
    skills.style.display = 'block';
  
=======

    var h2 = document.createElement("h2");
    h2.textContent = result[0].title.rendered;
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
>>>>>>> 7cbfb9a9e9c74d89b70f3ab4f3b3ab067ba7acc1
  });
});
