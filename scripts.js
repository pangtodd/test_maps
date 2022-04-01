function initMap() {
  let coords = [];
  let markers =[];
  const pdx= {lat: 45.523064, lng: -122.676483 };
  const nicholas= {lat:45.5133, lng:-122.6545}
  const kongs= {lat: 45.505443194670114, lng:-122.57600986137842}
  coords.push(pdx, nicholas,kongs)
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: pdx,
  });

  for (let i = 0; i < coords.length; i++){
   markers[i]= new google.maps.Marker({
     position: coords[i],
     map:map,
     label: (i+1).toString(),
   });
   }

  // const marker1 = new google.maps.Marker({
  //   position: coords[0],
  //   map: map,
  //   label: "1",
  // });
  // const marker2 = new google.maps.Marker({
  //   position: coords[1],
  //   map: map,
  //   label: "2"
  // });
  // const marker3 = new google.maps.Marker({
  //   position: coords[2],
  //   map: map,
  //   label: "3"
  // });
}