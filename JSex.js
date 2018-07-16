// var age = prompt("How old are you?");
// alert(+age +" years is " +((age*365)+7) + " days old");

// var person={
//     name: ['Rohit', 'Kumar'],
//     age: 28,
//     hobbies: ['Coding', 'Cooking'],
//     gender: "Male",
//     bio: function(){
//         alert(this.name[0] + ' ' + this.name[1]+ " is my name. I'm " + this.age + " years old. My hobbies are " + this.hobbies[0] + " and " + this.hobbies[1] + ".");
//     },
//     greeting: function(){
//         alert("Hi! I'm " +this.name[0] + ". Nice to meet you!");
//     },
//     farewell: function(){
//         alert("Peace out!");
//     }
// };

var age = prompt("Enter your age: ");
if(age<1){
    console.log("Age cannot be zero or negative");
}
else if(age<18){
    console.log("Not old enough to enter");
}
else if(age>18 && age < 21){
    console.log("You can enter but cannot drink!");
}
else{
    console.log("Enjoy the party!!!");
}