function getPosition() {
  var x = document.getElementById("getPosition");
  var b = document.getElementById("button");
  var lat = document.getElementById("latitude");
  var lon = document.getElementById("longitude");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  getLocation()
  function showPosition(position) {
    lat.value = position.coords.latitude;
    lon.value = position.coords.longitude;
  }
  b.style.display = "none";
}

function showGoogleMap(){
  var map;
  var marker;
  var b = document.getElementById("button");
  var center = {
    lat: gon.post.latitude,
    lng: gon.post.longitude
  };
  function initgoogleMap(){
    map = new google.maps.Map(document.getElementById('sample'),{
      center: center,
      zoom: 17
    });
    marker = new google.maps.Marker({
      position: center,
      map: map
    });
  }
  initgoogleMap()
  b.style.display = "none";
}

//参考にしたサイトhttps://www.w3schools.com/html/html5_geolocation.asp