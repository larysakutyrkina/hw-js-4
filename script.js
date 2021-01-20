function createNewUser () {
    let newUser = {
        firstName : prompt("Please enter your name"),
        lastName : prompt("Please enter your last name"),

        getLogin() {
            return ((this.firstName[0] + this.lastName.trim()).toLowerCase());
        },
    }
    return newUser;
}

let myUser = createNewUser();

console.log(myUser.getLogin());






    
   

