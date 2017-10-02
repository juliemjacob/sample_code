// Chore Object Prototype code

function Chore(name, frequency, difficulty, room) {
	this.name = name;
	this.frequency = frequency;
	this.difficulty = frequency;
	this.room = room;
	this.completed = false;
    this.pauseChore = false;
    
};