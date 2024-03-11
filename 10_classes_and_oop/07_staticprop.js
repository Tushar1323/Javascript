// In JavaScript, static methods belong to the class itself rather than to instances of the class. Therefore, you cannot directly access a static method using an instance of the class. Instead, you access static methods directly from the class itself.

// User.createId();
// So, in your code, you would use User.createId() to access the static method, rather than trying to access it through an instance like hitesh.createId().

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `177@tsk.com`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()) // error
console.log(User.createId()) // 177@tsk.com


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId()); // error