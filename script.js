///can they drink if date of birth before today 21 years ago then yes they can else no, print along with the rest ofthe passenger information

//print out function should do first and last name as well as id 

//////need to fix age and figure out how to do date

/////////////////////////////////////////////////////////////////////////////
//remember to set outmeal equal to mealArr and same thinf with extras and such
class Passenger {
    constructor(firstName, lastName, idCount, dob, pointA, pointB, leavingDate, returningDate, bags, meal, extras, age, finalCost) {
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
        this.finalCost = finalCost;
    }
    calculateAge() {
        let birthday = new Date(this.dob);
        let now = Date.now();
        let age = now - birthday.getTime();
        age = age / (1000 * 60 * 60 * 24 * 365);
        age = Math.floor(age);
        this.age = age
    }
    calculateFinalCost() {
        let finalCost = calculateExtrasCost() + calculateBagsCost() + 300;
        console.log(finalCost);
        console.log(calculateExtrasCost());
        console.log(calculateBagsCost());
        console.log(finalCost);
        this.finalCost = finalCost;
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
    let extras = findExtras().join(", ");
    let meal = findMeals().join(", ");
    // let finalCost = calculateFinalCost();
    if (firstName != "" && lastName != "" && dob != "" && pointA != "" && pointB != "" && leavingDate != "" && returningDate != "") {
        let passenger = new Passenger(firstName, lastName, idCount, dob, pointA, pointB, leavingDate, returningDate, bags, meal, extras);
        idCount++;
        passenger.calculateAge();
        passenger.calculateFinalCost();
        passengerList.push(passenger);
        //to reset
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("dob").value = "";
        document.getElementById("pointA").value = "";
        document.getElementById("pointB").value = "";
        document.getElementById("leavingDate").value = "";
        document.getElementById("returningDate").value = "";
        document.getElementById("bags").value = "";
        document.getElementsByName("extras").value = "";
        document.getElementsByName("meal").value = "";
        // document.getElementById("age").value = "";
    } //else{
    //     alert("enter all required information");
    // }
    if (bags == "") {
        bags = "n/a";
    }
    if (meal == "") {
        meal = "n/a";
    }
    if (extras == "") {
        extras = 300;
    }
    console.log(passengerList);
}

function findExtras() {
    let extrasArr = [];
    if (document.getElementById("extras1").checked) {
        console.log(`legroom is checked`);
        extrasArr.push(document.getElementById("extras1").value);
    }
    if (document.getElementById("extras2").checked) {
        console.log(`window is checked`);
        extrasArr.push(document.getElementById("extras2").value);
    }
    if (document.getElementById("extras3").checked) {
        console.log(`headphones is checked`);
        extrasArr.push(document.getElementById("extras3").value);
    }
    if (document.getElementById("extras4").checked) {
        console.log(`more food is checked`);
        extrasArr.push(document.getElementById("extras4").value);
    }
    console.log(extrasArr);
    return extrasArr;
}

function findMeals() {
    let mealArr = [];
    if (document.getElementById("meal1").checked) {
        console.log(`chicken is selected`);
        mealArr.push(document.getElementById("meal1").value);
    }
    if (document.getElementById("meal2").checked) {
        console.log(`fish is selected`);
        mealArr.push(document.getElementById("meal2").value);
    }
    if (document.getElementById("meal3").checked) {
        console.log(`veggie is selected`);
        mealArr.push(document.getElementById("meal3").value);
    }
    return mealArr;
}

function calculateBagsCost() {
    let bagsCost = 20 * bags.value;
    console.log(bagsCost);
    return bagsCost;
}


function calculateExtrasCost() {
    let extrasCost = findExtras().length * 10;
    return extrasCost;
}
// console.log(calculateExtrasCost());

// function calculateFinalCost() {
//     let finalCost = calculateExtrasCost() + calculateBagsCost() + 300;
//     console.log(finalCost);
//     console.log(calculateExtrasCost());
//     console.log(calculateBagsCost());
//     return finalCost;
// }
// calculateFinalCost();

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


function tripTime() {
    //needs to run when submitted 
}

////notes for self for next similar project
//in html, for a checkbox like "extras", i shouldve made the names the same, then i shouldve on line 40 searched instead by names. then made each id different so that i could check which ids were checked bcs easier
//make clear spot for variable initialization