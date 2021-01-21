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
//next 20 lines copied from other project, still unedited
function addPassenger(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    if(firstName != "" && lastName != ""){
        let user = new User(firstName, lastName, idCount);
        idCount++;
        userList.push(user);
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
