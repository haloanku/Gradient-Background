let database = [
    {
        username: "haloanku",
        password: "123"
    },
    {
        username: "halo",
        password: "456"
    },
    {
        username: "anku",
        password: "789"
    }

];

let newsFeed = [
    {
        username: "Rahul",
        timeline: "Hello"
    },
    {
        username: "Naval",
        timeline: "Namaste"
    }
];

function isUserValid(username, password) {
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === username && 
            database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)){
        console.log(newsFeed);
    } else {
        alert("Wrong username or password!");
    }
}

let userNamePrompt = prompt("Enter username");
let passwordPrompt = prompt("Enter password");

signIn(userNamePrompt, passwordPrompt);