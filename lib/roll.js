import minimist from 'minimist';

//Main function
export function roll(sides, dice, rolls){
	const values = [];
	
	//the rolls
	for (let i = 0; i < rolls; i++) {
		//Adding the rolls
		const temp = 0;
		for(let j = 0; j < dice; j++) {
			temp += choose(sides);
		}
		values[i] = temp;
	}
	var results = {
		sides: sides,
		dice: dice,
		rolls: rolls,
		results: values
	}
	return JSON.stringify(results);
}

function choose(sides){
	var randomNumber = Math.floor(Math.random() * sides) + 1;
    	return randomNumber;
  }
