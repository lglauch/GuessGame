let attempts = 0;
let running = true;
const min = 1;
const max = 100;

const answer= Math.floor(Math.random() * (max - min + 1) + min);


while (running)
	{
		let guess = window.prompt(`Please enter a number between ${min} - ${max}`);
		if (isNaN(guess))
			window.alert("Please enter valid input!")
		else if (guess > max || guess < min)
			window.alert("Please enter valid input!")
		else
		{
			attempts++;
			if (guess < answer)
				window.alert("Number too low!")
			else if (guess > answer)
				window.alert("Number too high!")
			else{
				window.alert(`Correct number! You tried ${attempts} times.`)
				document.getElementById("winner").innerText = "You are a champion!!!"
				running = false
			}
		}
}