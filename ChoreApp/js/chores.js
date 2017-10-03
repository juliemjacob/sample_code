// Chore Object Prototype code

function Chore(name, frequency, difficulty, room) {
	this.name = name;
	this.frequency = frequency;
	this.difficulty = frequency;
	this.room = room;
	this.completed = false;
    this.pauseChore = false;
    
}


//List of household rooms for dropdown list on addChore
var room = [
    "Basement",
    "Stairs",
    "Living Room",
    "First Floor Bathroom",
    "Kitchen",
    "Dining Room",
    "First Floor Hall",
    "Second Floor Hall",
    "Second Floor Bathroom",
    "Master Bedroom",
    "Bedroom 1",
    "Bedroom 2",
    "Bedroom 3",
    "Bedroom 4",
    "Office",
    "Playroom",
    "Third Floor Bathroom"
];

//populate dropdown list on addChore form

function roomList() {


    for (var i = 0; i < room.length; i++){
        var newRoom = document.createElement("OPTION");
        newRoom.setAttribute("value", room[i]);
        var text = document.createTextNode(room[i]);
        newRoom.appendChild(text);
        document.getElementById("roomOption").appendChild(newRoom);

    }
}