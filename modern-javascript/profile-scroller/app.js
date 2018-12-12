const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Kyiv OBL',
    image: 'https://randomuser.me/portraits/men/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Kyiv OBL',
    image: 'https://randomuser.me/portraits/men/83.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Kyiv OBL',
    image: 'https://randomuser.me/portraits/women/82.jpg'
  }
];


const profiles = profileIterator(data);

//  Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

//  Next Profile Display
function nextProfile(){
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Gender: ${currentProfile.gender}</li>
      <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles){
  let nextIndex = 0;

  return{
    next: () => {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}