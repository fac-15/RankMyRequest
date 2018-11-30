function fetchData(cb) {
  // make the request
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    //if the response has the right headers
    if (xhr.readyState === 4 && xhr.status === 200) {
      //parse the objects
      cb(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", "/apiHandler", true);
  xhr.send();
}

function fetchDataSplash() {
  var xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      JSON.parse(xhr.responseText);
    }
  };
  xhr.open("GET", "/apiSplash", true);
  xhr.send();
}
// fetchDataSplash();
