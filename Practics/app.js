const person = {
  name: "John Doe",
  age: 32,
  city: "Miami",
  gender: "Male",
  sayHello: function(){
    console.log("Hello")
  }
}

const{name,...obj} = person;

console.log(name,obj);