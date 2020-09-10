// Search input
const searchUser = document.getElementById("searchUser");
// GitHub object
const github = new GitHub();
// UI object
const ui = new UI();

// Search input event listener
searchUser.addEventListener("keyup",(e)=>{
  // Get input text
  const userText = e.target.value;

  if(userText !== ""){
    github.getUser(userText)
      .then(data =>{
        if(data.profile.message === "Not Found"){
          // Show alert
          ui.showAlert("User not found","alert alert-danger")
        }
        else{
          // Show Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  }
  else{
    // Clear Profile
    ui.clearProfile();
  }

});