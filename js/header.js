//JS for login and stuff

var script = document.createElement('script');
script.src = 'http://www.parsecdn.com/js/parse-1.2.18.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


var testUser = function () {
  Parse.initialize("Ycnw3xJDv5iT8avNOo54rTM0kuTJpNMMwsMs4iIP", "qYnG7XTl8iSLu9M5iP1lZLiC8LBQHYyCvqwuE3e3");
  
  var currentUser = Parse.User.current()
  var currentName=""

  if(currentUser!=null) currentName=currentUser.get("username");
    if(currentName!=null&&currentName!=""){
      var finalObj=""
      finalObj += "<ul class='nav navbar-nav navbar-right'>\n"

      finalObj += "<li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown' id='usernameDisplay'>What's up <b>"+currentName+"</b>?</a>\n"
      finalObj += "<ul class='dropdown-menu'>\n"
      finalObj += "<li><a href='storePreview.html'>View Store</a></li>\n"
      if(currentUser.get("storeId")!="")
      finalObj += "<li><a href='currentlyListed.html'>Manage Shoes</a></li>"
      finalObj += "<li><a href='settings.html' role='button'>Account Settings</a></li>"
      finalObj += "</ul>\n"

      var alerts=0;
      if(currentUser.get("emailVerified")==false){
        alerts=alerts+1;
      }

      finalObj += "<li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown' id='usernameDisplay'><span class='badge' id='alertsBadge'>" + alerts + "</span>  alerts</a>\n"
      finalObj += "<ul class='dropdown-menu'>\n"
      if(alerts==0){
        finalObj += "<center style='cursor:default;'>No new alerts!</center>\n"
      }

      if(currentUser.get("emailVerified")==false){
        finalObj += "<center style='cursor:default;'>Please verify your email</center>\n"
      }

      finalObj += "</ul>\n"

      finalObj += "<li onClick='logOut()'><a href='#accountModal' role='button' data-toggle='modal'><span class='glyphicon glyphicon-lock'></span> log out</a></li>\n"

      finalObj += "</li>\n"
      finalObj += "</ul>\n"
      return(finalObj)
    }else{
      var finalObj=""
      finalObj += "<ul class='nav navbar-nav navbar-right'>\n"
      finalObj += "<li><a href='#accountModal' role='button' data-toggle='modal'><span class='glyphicon glyphicon-lock'></span> login</a></li>\n"
      finalObj += "<li><a href='#accountModal' role='button' data-toggle='modal'><span class='glyphicon glyphicon-user'></span> sign up</a></li>\n"
      finalObj += "</ul>"
      var insertNonsense=document.getElementById("logTest")
          $(window).load(function(){
              $('#accountModal').modal('show');
          });
      return(finalObj)
    }

    if (currentUser) {
      var pStuff = document.getElementById("loginItems");
          //just commented this to fix an error, you can do whatevs with this
          //pStuff.innerHTML = "<li style='padding-top:15px;padding-bottom:15px;'><span class=''></span> What's up "+ currentUser.get("username") +"? <li style='cursor:pointer;'><a onclick='logOut()''><span class='glyphicon glyphicon-lock'></span> logout</a>  <li><a href='#''><i class='glyphicon glyphicon-shopping-cart'></i> items in cart: <span style='color:#2A5469'>00</span></a></li>";
    }

}

var logOut = function() {
        Parse.initialize("Ycnw3xJDv5iT8avNOo54rTM0kuTJpNMMwsMs4iIP", "qYnG7XTl8iSLu9M5iP1lZLiC8LBQHYyCvqwuE3e3");
        Parse.User.logOut();
      var currentUser = Parse.User.current();
    location.reload();
  }

var signUp = function(){
  Parse.initialize("Ycnw3xJDv5iT8avNOo54rTM0kuTJpNMMwsMs4iIP", "qYnG7XTl8iSLu9M5iP1lZLiC8LBQHYyCvqwuE3e3");
    var nameStuff = document.getElementById("SUusernameInput").value.toLowerCase();
    var passStuff = document.getElementById("SUpasswordInput").value;
    var passStuff2 = document.getElementById("SUpassword2Input").value;
    var emailStuff = document.getElementById("SUemailInput").value;
    var firstStuff = document.getElementById("fNameInput").value;
    var lastStuff = document.getElementById("lNameInput").value;
    var usernameLimit = 10;

    if (passStuff2 === passStuff) {

      if (nameStuff.length <= usernameLimit)
      {
        var user = new Parse.User();
        user.set("username", nameStuff);
        user.set("password", passStuff);
        user.set("email", emailStuff);
        user.set("firstName", firstStuff);
        user.set("lastName", lastStuff);
        user.set("storeId", "")


        user.signUp(null, {
          success: function(user) {
            alert("Congrats "+nameStuff+", please verify your email");
            location.reload();
          },
          error: function(user, error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });
      }
      else{
        woahThereUser.innerHTML = "Usernames cannot be longer than ten characters";
      }
    }
    else {
      woahThere.innerHTML = "Your passwords do not match";
    }
}

var submitSearch = function(){
  var searchQuery = document.getElementById("tempSearch").value;
  if (searchQuery != "" & searchQuery != " ") //If there is a search
  {
    //alert("made it")
    var RPP="";
    if(document.getElementById("resultsPerPage")!=null){
    RPP = "#resultsPerPage=" + document.getElementById("resultsPerPage").value;
    }else{
      RPP = "#resultsPerPage=3"
    }
    var linkTo = "search.html?search=" + searchQuery;
    //alert("Redirecting to..." + linkTo);
    var url = linkTo;    
    // alert(url)
    window.location.href = url;

    //$(location).attr('href',url);
    // window.location.replace("google.com")
    //window.location.assign("index.html")
    //alert(window.location.href)
    //location.reload();
    ///window.location.href = "search.html?search=" + searchQuery + "#filter=shoes#page=1"; //Redirect
    //alert("Got past the link");
    // window.location.href = 'http://www.google.com'; //For debugging
    // location.reload(); //Reload window
    return false;
  }
  else
  {
    alert("Please enter a search query")
  }
}

var findTimezone = function(){
  var date = new Date();
  var offset = date.getTimezoneOffset();
}

var saveClose = function(){
  Parse.initialize("Ycnw3xJDv5iT8avNOo54rTM0kuTJpNMMwsMs4iIP", "qYnG7XTl8iSLu9M5iP1lZLiC8LBQHYyCvqwuE3e3");
  //checks if current user is logged in
  var currentUser = Parse.User.current();
  var currentName = currentUser.get("username")
  if(currentName==null||currentName==""){
    alert("Please log in to continue")
  }else{
    if(document.getElementById("emailChange").value!=null&&document.getElementById("emailChange").value!=""){
        user.set("email", document.getElementById("emailChange"));
        alert("email changed to " + emailChange);
    }else{
    }
    if(document.getElementById("passwordChange").value!=null&&document.getElementById("passwordChange").value!=""){
      if(document.getElementById("passwordChange")==document.getElementById("changePasswordCheck")){
        user.set("password", document.getElementById("passwordChange"))
      }else{
        changePasswordAlert.innerHTML="Your passwords do not match"
      }
    }
    if(document.getElementById("usernameChange").value!=null&&document.getElementById("usernameChange".value)!=""){
      user.set("username", document.getElementById("usernameChange"));
      alert("username changed to " + usernameChange)
    }
  }
}

var updateModals= function(){
  if(Parse.User.current()!=null&&Parse.User.current()!=""){
    var finalObj=document.getElementById("account");
    document.getElementById("myTabContent").innerHTML = finalObj.innerHTML;
  }else{
    var finalObj=""
    finalObj += "<ul id='myTab' class='nav nav-tabs'>\n"
    finalObj += "<li class='active'><a href='#signIn' data-toggle='tab'><span class='glyphicon glyphicon-lock'></span> sign in</a></li>\n"
    finalObj += "<li class=''><a href='#signUp' data-toggle='tab'><span class='glyphicon glyphicon-user'></span> sign up</a></li>\n"
    finalObj += "</ul>"
    var insertNonsense=document.getElementById("modalTabs")
    insertNonsense.innerHTML=finalObj
  }
}

var logIn = function(){                      
  Parse.initialize("Ycnw3xJDv5iT8avNOo54rTM0kuTJpNMMwsMs4iIP", "qYnG7XTl8iSLu9M5iP1lZLiC8LBQHYyCvqwuE3e3");
  var nameStuff = document.getElementById("usernameInput").value.toLowerCase();
  var passStuff = document.getElementById("passwordInput").value;

  Parse.User.logIn(nameStuff, passStuff, {
    success: function(user) {
      location.reload();
    },
    error: function(user, error) {
      loginPassError.innerHTML="Your username or password is incorrect"
      //alert(document.getElementById("loginPassError"))
    }
  });
  event.preventDefault();
}