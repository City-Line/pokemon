class Pokemon {
	constructor (name,lv){
		this.name=name;
		this.lv=lv;
	}
	show(){
		console.log(`name = ${this.name}  level=${this.lv}`);
	}
}
	
	
class PokemonList extends Array{
	constructor(...pokLst){
		super();
		pokLst.forEach((item)=>this.push(item));
	}
	
	add(name,lv){
		var newPok = this.push(new Pokemon(name,lv));
	}
	show(){
		this.forEach((item)=>item.show());
		console.log(`common count = ${this.length}`);
	}
	
}


let lost = new PokemonList(new Pokemon("Pok1", 1), new Pokemon("Pok2", 2), new Pokemon("Pok3", 1)); //создание 2 списков
let found = new PokemonList(new Pokemon("Pok4", 2), new Pokemon("Pok5", 1), new Pokemon("Pok6", 1));
console.log(`lost:`);
lost.show(); //вывели, добавили, и еще раз вывели
lost.add("Pok7", 3);
console.log(`-------------------`);
lost.show();
console.log(`-------------------`);
console.log(`found:`);
found.show();
console.log(`-------------------`);
console.log(`magic!:`);
found.push(lost.pop()); //перекинули, вывели результат
console.log(`lost:`);
lost.show();
console.log(`-------------------`);
console.log(`found:`);
found.show();