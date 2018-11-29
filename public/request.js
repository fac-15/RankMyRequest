var xhr = new XMLHttpRequest();

console.log(xhr);
function fetchData(cb) {
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // console.log(xhr.responseText);
      cb(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", "../src", true);
  xhr.send();
}
