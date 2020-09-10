const data = [
  {
    name:"John Doe",
    age:32,
    gender:"male",
    lookingfor:"female",
    location: "bengaluru",
    image:"https://randomuser.me/api/portraits/men/82.jpg"
  }
  ,
  {
    name:"Jen Smith",
    age:26,
    gender:"female",
    lookingfor:"male",
    location:"chennai",
    image:"https://randomuser.me/api/portraits/women/82.jpg"
  }
  ,
  {
    name:"Johnny Doe",
    age:23,
    gender:"male",
    lookingfor:"female",
    location:"coimbatore",
    image:"https://randomuser.me/api/portraits/men/1.jpg"
  }
];

const profiles = profileIterator(data);

nextProfile();

document.getElementById("next").addEventListener("click",nextProfile);


// Next Profile Display
function nextProfile(){
  const currentProfile = profiles.next().value;
  
  if(currentProfile!== undefined)
  {document.getElementById("profileDisplay").innerHTML =`<ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>`;
  document.getElementById("imageDisplay").innerHTML =
  `<img src="${currentProfile.image}">`;
  }
  else{
    window.location.reload();
  }

}



// Profile Iterator
function profileIterator(profile){
  let nextIndex =0;

  return{
    next: function(){
      return nextIndex < profile.length ?{
        value: data[nextIndex++],
        done:false,
      }
      :{done:true};
    }
  }
}