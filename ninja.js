class Ninja {
	constructor(name, health){
		this.name = name;
		this.health = health;
		this.speed = 3;
		this.strength = 3;
	}
	
	sayName(){
		console.log(this.name);
	}
	
	showStats(){
		console.log("Ninja name:"+this.name+" Health:"+this.health+" Speed:"+this.speed+" Strength:"+this.strength);
	}
	
	drinkSake(){
		this.health = this.health+10;
		console.log(this.health);
	}
	
}

class Sensei extends Ninja {
	constructor(name){
		super();
		this.name = name;
		this.wisdom = 10;
		this.health = 200;
		this.speed = 10;
		this.strength = 10;
	}
	
	speakWisdom(){
		const msg = super.drinkSake();
		console.log(msg);
	}
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"