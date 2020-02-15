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
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();