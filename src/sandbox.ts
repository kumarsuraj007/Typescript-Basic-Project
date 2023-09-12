type objectOf = {name: String, age: Number};

let greet:Function = (user: objectOf) => {
    return console.log(user)
}

greet("Suraj")