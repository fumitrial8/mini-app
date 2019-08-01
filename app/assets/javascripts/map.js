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
  var latlon = gon.post.latitude + "," + gon.post.longitude;
  var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false&key=AIzaSyCU-duYfWRvha9NrxBvmCJdSwJmUpr7XBg";
  document.getElementById("button").innerHTML = "<img src='"+img_url+"'>";
}

//参考にしたサイトhttps://www.w3schools.com/html/html5_geolocation.asp