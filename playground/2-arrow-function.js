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
    guestList: ['Sid', 'Kim', 'Dip'],
    printGuestList (){ //Note : ES6 arrow func don't bind their own this value, use below syntax for func instead
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) =>{  //Note: ES6 arrow func can access this values of function they are created in 
            console.log(guest + ' is attending ' + this.name)
        })
    }
}


event.printGuestList()