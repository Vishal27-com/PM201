// boolean
var present = true;
// number
var age = 19;
// bigint
var bank_balance = 15n;
// null
var job = null;
// string
var fullname = 'Vishal Gupta';
// array
var fav_sub = ['DSA', 'Coding', 'Problem-Solving'];
// tuple
var sub_with_marks = ['Coding', 100];
// any
var data = ['nadjfoi', 15453, {}, [], null];
// function
function sum(a, b) {
    return a + b;
}
// void
function print_name() {
    console.log("Vishal Gupta");
}
// enum 
var Role;
(function (Role) {
    Role[Role["fullstack"] = 0] = "fullstack";
    Role[Role["frontend"] = 1] = "frontend";
    Role[Role["backend"] = 2] = "backend";
})(Role || (Role = {}));
var user = Role.fullstack;
console.log(user);
