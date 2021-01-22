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

    if(firstName != "" && lastName != ""){
        let passenger = new Passenger(firstName, lastName, idCount);
        idCount++;
        passengerList.push(passenger);
        ///to reset ..
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
    }
}

function print(){
    let space = document.getElementById("printSpace");
    space.innerHTML = "";
    for(let i = 0; i < userList.length; i++){
        space.innerHTML += `<div><span>${userList[i].ID}</span> ${userList[i].firstName} ${userList[i].lastName}</div>`
    }
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

let pass1 = new Passenger("Jadyn", "Calhoun", 2384798);