var database = [
     {
     	username: "Himansu",
     	password:"1234"
     },

     {
     	username: "Rinky",
     	password:"3210"
     },

     {
     	username: "Sipu",
     	password:"9087"
     }

];

var newsFeed = [
     {
     	username:"Bobby",
     	timeline:"So tired from all that learning!"
     },

     {
     	username:"Javaboy",
     	timeline:"Javascript is soooooo cooool!"
     },

     {
     	username:"Python",
     	timeline:"Python is soooooo cooool!"
     }

];


function isUserValid(username, password) {
        for (var i = 0; i < database.length; i++ ) {
		if (database[i].username === username && 
			database[i].password === password) {
			return true;
		} 

	   }
	   return false;
}

function signIn(username,password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password");
	}
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
