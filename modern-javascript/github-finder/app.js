// Search input
const searchUser = document.getElementById('searchUser').addEventListener('keyup',(e) => {
  // Get input text
  const userText = e.target.value;
  const github = new Github()
  const ui = new UI();

  if(userText !== ''){
    // Make HTTP call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger')
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});


