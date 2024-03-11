const User = {
    _email: 'Tushar@google.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email); // H@HC.COM
console.log(tea._email); // h@hc.com