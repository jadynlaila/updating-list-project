///can they drink if date of birth before today 21 years ago then yes they can else no, print along with the rest ofthe passenger information

//print out function should do first and last name as well as id 

//////need to fix the bgs going below 0
class Passenger {
    constructor(firstName, lastName, idCount, dob, pointA, pointB, leavingDate, returningDate, bags, meal, extras, age, cost) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idCount = idCount;
        this.dob = dob;
        this.pointA = pointA;
        this.pointB = pointB;
        this.leavingDate = leavingDate;
        this.returningDate = returningDate;
        this.bags = bags;
        this.meal = meal;
        this.extras = extras;
        this.age = age;
        this.cost = cost;
    }
}


//next ~25 lines copied from other project, edited

let passengerList = [];
let idCount = 1;

function addPassenger() {
    ////checks that everything != "", that dates are in correct format, things can = "" if not required
    ///can they drink if date of birth before today 21 years ago then yes they can else no, print along with the rest ofthe passenger information
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dob = document.getElementById("dob").value;
    let pointA = document.getElementById("pointA").value;
    let pointB = document.getElementById("pointB").value;
    let leavingDate = document.getElementById("leavingDate").value;
    let returningDate = document.getElementById("returningDate").value;
    let bags = document.getElementById("bags").value;
    let extras = document.getElementById("extras").value;
    let meal = document.getElementById("meal").value;
    let age = 0;
    let cost = 300;

    if (firstName != "" && lastName != "" && dob != "" && pointA != "" && pointB != "" && leavingDate != "" && returningDate != "") {
        let passenger = new Passenger(firstName, lastName, idCount, dob, pointA, pointB, leavingDate, returningDate, bags, meal, extras, age, cost);
        idCount++;
        passengerList.push(passenger);
        ///to reset ..
        // document.getElementById("firstName").value = "";
        // document.getElementById("lastName").value = "";
        // document.getElementById("dob").value = "";
        // document.getElementById("pointA").value = "";
        // document.getElementById("pointB").value = "";
        // document.getElementById("leavingDate").value = "";
        // document.getElementById("returningDate").value = "";
        // document.getElementById("bags").value = "";
        // document.getElementById("extras").value = "";
        // document.getElementById("meal").value = "";
        // document.getElementById("age").value = "";
        // document.getElementById("cost").value = "";  
    }
    if (bags == "") {
        bags = "n/a";
    }
    if (meal == "") {
        meal = "n/a";
    }
    if (extras == "") {
        extras = "n/a"
    }
    console.log(passengerList);
    for (let i = 0; i < passengerList.length; i++) {
        let bagsCost = 0;
        if (bags.value != 0) {
            bagsCost = bags * 20;
        }
        cost = cost + bagsCost;
        console.log(cost);
    }
    for (let i = 0; i < document.getElementsByName(extras).checked; i++) {
        let extrasArr = [];
        extrasArr.push[i];
        // let extrasArr = [];
        // if (document.getElementsByName(extras).checked){
        //     extrasArr.push[i];
        // }
        // console.log(extrasArr);
        // console.log(extras);
        // console.log('hello');
    }
}
function print() {
    let space = document.getElementById("printSpace");
    space.innerHTML = "";
    for (let i = 0; i < passengerList.length; i++) {
        space.innerHTML += `<div>${passengerList[i].firstName.value} ${passengerList[i].lastName.value}<div>`
    }
    // for(let i = 0; i < passengerList.length; i++){
    //     document.getElementById("firstNamePrint").textContent = `First name: ${passengerList[i].firstName}`;
    //     document.getElementById("lastNamePrint").textContent = passengerList[i].lastName;
    //     document.getElementById("dobPrint").textContent = passengerList[i].dob;
    //     document.getElementById("departingPrint").textContent = passengerList[i].pointA;
    //     document.getElementById("arrivingPrint").textContent = passengerList[i].pointB;
    //     document.getElementById("leavingPrint").textContent = passengerList[i].leavingDate;
    //     document.getElementById("returningPrint").textContent = passengerList[i].returningDate;
    //     ///need to calculat4e trip duration and put here
    //     document.getElementById("bagsPrint").textContent = passengerList[i].bags;
    //     document.getElementById("mealPrint").textContent = passengerList[i].meal;
    //     document.getElementById("extrasPrint").textContent = passengerList[i].extras;
    //     ///need to calculate trip cose and print
    //     ///need to calculatee age and print
    // }
}
function search() {
    //ok all items in an array will have their id and each button will have a corresponding number, then when they select their name it will 
    //depending on which text you choose, it will add a # to a variable and then that variable will be used to search through the array to find your information. it'll then print out into each spot


}
function check21() {
    //needs to run when people submit

}

function findCosts() {


}

function tripTime() {
    //needs to run when submitted 
}

////notes for self for next similar project
//in html, for a checkbox like "extras", i shouldve made the names the same, then i shouldve on line 40 searched instead by names. then made each id different so that i could check which ids were checked bcs easier