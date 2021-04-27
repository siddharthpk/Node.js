// const square = function (x){
//     return x*x
// }


//ES6 function declaration: fn name = (variables) =>{ function body}
 const square1 = (x) =>{
     return x*x
 }


//For just returning something use the short hand belowx
const square2 = (x) =>  x*x

console.log(square1(4))

const event = {
    name: "D-day",
    printGuestList: function(){
        console.log("Guest list for D-days")
    }
}


event.printGuestList()