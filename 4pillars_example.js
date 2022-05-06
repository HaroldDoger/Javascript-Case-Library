// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Contractor{
    constructor(name, role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hello, my name is ${this._name} and I'm on the ${this._role} team!` )
    }

    sayBye(){
        console.log('It has been a pleasure working with you!')
    }
}

class Front extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am ${this._name} and I work on the Front-end!`)
    }

}

class Back extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am ${this._name} and I work on the Back-end!`)
    }

}

let machi = new Front('The Machine', 'Front-end', 'React')
let simba = new Back('Simba','Back-end','Node')

let agencyList = [machi, simba]

for(person of agencyList){
    person.sayHello()
}








