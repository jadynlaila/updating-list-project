///can they drink if date of birth before today 21 years ago then yes they can else no, print along with the rest ofthe passenger information

//print out function should do first and last name as well as id 


class Passenger{
    constructor(){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.pointA = pointA;
        this.pointB = pointB;
        this.leavingDate = leavingDate;
        this.returningDate = returningDate;
        this.bags = bags;
        this.meal = meal;
        this.extras = extras;
    }
}


//next ~25 lines copied from other project, still unedited

let passengerList = [];
let idCount = 1;

function addPassenger(){
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
    let meal = document.getElementById("meal").value;
    let extras = document.getElementById("extras").value;

    if(firstName != "" && lastName != "" && dob != "" && pointA != "" && pointB != "" && leavingDate != "" &&  returningDate != ""){
        let passenger = new Passenger(firstName, lastName, idCount);
        idCount++;
        passengerList.push(passenger);
        ///to reset ..
        // document.getElementById("firstName").value = "";
        // document.getElementById("lastName").value = "";
    }
    if(bags == ""){
        bags = "n/a";
    }
    if(meal == ""){
        meal = "n/a";
    }
    if (extras == ""){
        extras = "n/a"
    }
    console.log(passengerList);
}
function print(){
    let space = document.getElementById("printSpace");
    space.innerHTML = "";
    // for(let i = 0; i < passengerList.length; i++){
    //     space.innerHTML += `<div>${passengerList[i].firstName.value} ${passengerList[i].lastName.value} ${passengerList[i].dob.value} ${passengerList[i].pointA.value} ${passengerList[i].pointB.value} ${passengerList[i].leavingDate.value} ${passengerList[i].returninDate.value} ${passengerList[i].bags.value} ${passengerList[i].meal.value} ${passengerList[i].extras.value}</div>`
    // }
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

function check21(){
    //needs to run when people submit

}

function extraCosts(){
    //needs to run when submitted
}

function tripTime(){
    //needs to run when submitted 
}

