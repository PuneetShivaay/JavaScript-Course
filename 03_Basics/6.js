// program to pass a function as a parameter

function greet() {
    return 'Hello ';
}

// passing function greet() as a parameter
function user(user, func) {

    // accessing passed function
    const message = func();

    document.write(`${message} ${user}  <br>`);
}

user('Puneet', greet);
user('Shivaay', greet);
user('Sachin', greet);