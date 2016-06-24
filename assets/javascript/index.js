$(document).ready(function(){


  //Login page on click functions
  $('.toggle').on('click', function() {
    $('.container').stop().addClass('active');
  });

  $('.close').on('click', function() {
    $('.container').stop().removeClass('active');
  });

  $('#button').on('click', function (){
    var ref = new Firebase('https://loginauthenticator.firebaseio.com/');
    $('.container').stop().removeClass('active');
    var emailAddress = $('#newEmail').val();
    var newPassword = $('#newPassword').val();
    var repeatPassword = $('#repeatPassword').val();
    
    //creates user in firebase
    if(newPassword===repeatPassword){
    ref.createUser({
      email    : emailAddress,
      password : newPassword
  }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
    } else {
      console.log("Successfully created user account with uid:", userData.uid);
    }
  });
  
    };
  });

  //References the users and checks for matches email & password
  $('#mainButton').on('click', function(){
    var ref = new Firebase('https://loginauthenticator.firebaseio.com/');
    var userEmail = $('#mainEmail').val();
    var userPassword = $('#mainPassword').val();
    
    ref.authWithPassword({
      email    : userEmail,
      password : userPassword
    }, function(error, authData) {
     if (error) {
      console.log("Login Failed!", error);
    } else {
      location.replace('task.html');
      console.log("Authenticated successfully with payload:", authData);
    }
});
  });

});