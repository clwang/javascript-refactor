
var profiles, allProfiles = [];
var profilesList = document.querySelector('#profiles-list');
var searchBar = document.querySelector('#search-bar');

function renderProfiles() {
  profiles.forEach(profile => {
    var el = renderProfileNode(profile);
    profilesList.appendChild(el);
  });
}

function renderProfileNode(profile) {
  var parent = document.createElement("div");
  parent.className = 'profile-card';
  var name = document.createElement("h3");
  name.textContent = profile.name;
  parent.appendChild(name);
  var location = document.createElement("em");
  location.textContent = profile.location;
  parent.appendChild(location);
  var position = document.createElement("p");
  position.textContent = profile.position;
  parent.appendChild(position);
  var image = document.createElement("img");
  image.src = 'http://api.adorable.io/avatar/100/'+profile.name;
  parent.appendChild(image);
  return parent;
}

var config = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  mode: 'cors',
};
fetch('/public/profiles.json', config)
.then(function(response) {
  response.json().then(function(buffer) {
    allProfiles = buffer.data;
    profiles = buffer.data;
    renderProfiles();
  });
});

function filterProfiles(event) {
  while (profilesList.firstChild) {
    profilesList.removeChild(profilesList.firstChild);
  }
  var filteredProfiles = [];
  var query = event.target.value.toLowerCase();

  if(query) {
    profiles.forEach(function (profile) {
      if(profile.name.toLowerCase().indexOf(query) > -1) {
        filteredProfiles.push(profile);
      }
      else if(profile.location.toLowerCase().indexOf(query) > -1) {
        filteredProfiles.push(profile);
      }
      else if(profile.position.toLowerCase().indexOf(query) > -1) {
        filteredProfiles.push(profile);
      }
    });
  } else {
    filteredProfiles = allProfiles;
  }

  profiles = filteredProfiles;
  renderProfiles();
}
