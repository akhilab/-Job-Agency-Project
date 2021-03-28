 var firebaseConfig = {
    apiKey: "AIzaSyBDLXMgvguKf14s2suFRg65vBIVRDvRUU0",
    authDomain: "websitedev-2aaab.firebaseapp.com",
    projectId: "websitedev-2aaab",
    storageBucket: "websitedev-2aaab.appspot.com",
    messagingSenderId: "751158950531",
    appId: "1:751158950531:web:cd4b0d6d69189035d239b6",
    measurementId: "G-Q4RWS4PER4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  
  function signUp(){
    //alert("hi");
		debugger;

		var _email = document.getElementById("email");
		var _password = document.getElementById("password");
		console.log("_email"+_email.value);
    console.log("_email"+_email.value);
     firebase.database().ref("user").set({
     email:_email.value,
     password:_password.value,
	
      });

		const auth = firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(_email.value, _password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}



  function login(){
    debugger;
    alert("login");
    var email = document.getElementById("username");
    var password = document.getElementById("password");
  console.log(email.value+" "+password.value);
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((success) => {
    // Signed in
    console.log(user);
    alert("login success!!");
    window.location.replace("index.html");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }

