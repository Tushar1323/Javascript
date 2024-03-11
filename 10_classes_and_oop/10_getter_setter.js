class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // getter and setter came together -

    // Error -> Maximum call stack size is exceeded -
    // get password(){
    //     return `${this._password}hitesh`
    // }

    // set password(value){
    //     this._password = value
    // }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);