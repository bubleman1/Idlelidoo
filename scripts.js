let money = 0;
let totalMoney = 0;
let rebirths = 0;
let universeNumber = 0;

let buttonValue = 1;
let buttonMultiplier = 1.00;
let buttonPassiveIncome = 0;
let buttonPassiveIncomeMultiplier = 1;

let moneyNeededForRebirth = 100;

let buttonUpgrades = [
	{
		name: "Button value +1",
		effect: "Gives +1 base value to the button.",
		cost: 100,
		isoneTime: false,
		upgradeIndex: 0
	},
	{
		name: "Button value x2",
		effect: "Gives 100% bonus multiplier to the button.",
		cost: 100,
		isOneTime: true,
		upgradeIndex: 1
	},
	{
		name: "Passive income +1",
		effect: "Gives 1 passive income.",
		cost: 100,
		isOneTime: false,
		upgradeIndex: 2
	},
	{
		name: "Passive multiplier x2",
		effect: "Gives 100% passive income multiplier.",
		cost: 100,
		isOneTime: true,
		upgradeIndex: 3
	},
	{
		name: "Stacking click multiplier",
		effect: "Gives 2% multiplier every click up to 100%. If no clicks within 5 seconds the multiplier begins to decay.",
		cost: 1000,
		isOneTime: true,
		upgradeIndex: 4
	}
	];

let currencyPossibleNames = ["money", "mony", "dolaridoos", "chedah", "dabloons", "gold", "amethysts", "diamonds", "copper", "silver",  //38 values|10|9|9|10
							 "cookies", "drams of water", "coal", "kilowats", "soap", "paperclips", "metres of real estate", "salt",
							 "cinnamon", "sugar", "organs", "blood", "string", "distance traveled", "xp", "magic", "black matter",
							 "planets", "germs", "tennis balls", "code", "humans", "titanium", "houses", "scrap", "freinds", "love",
							 "bananas", "cucumbers", "glizzies", "subscribers", "thingamajigs", "dirt", "bottle caps", "golden rings"];
let buttonPossibleText = ["Make me rich!", "Mek me rch!", "Make me rich!", "Make me some dough!", "Ma'ek me booty!", "Make me mine!", "Make me mine!", "Make me mine!", "Make me mine!", "Make me mine!", 
							 "Make me cook!", "Make me qud!", "Make me mine!", "Make me energy!", "Make me clean!", "Make Paperclip", "Make me expand!", "Make me salty!",
							 "Make me crush sticks!", "Make me die!", "Make me harvest!", "Make me donate!", "Make me spin!", "Make me run!", "Make me level up!", "Make me powerful!", "Make me interstellar rich!",
							 "Make me an overlord!", "Make me infected!", "Make me a tennis pro!", "Make me a programmer!", "Make me a civilization!", "Make me mine!", "Make me build!", "Make me scavange!", "Make me friendships!", "Make my wife like me!",
							 "Make banana!", "Make me pickle!", "Make me gobble!", "Make me famous!", "Make me invent!", "Make me scrape!", "Make me fallout rich!", "Make me go fast!"];

const mainButton = document.querySelector("#mainButton");
const currencyText = document.querySelector("#currencyText");
const currencyNameText = document.querySelector("#currencyNameText");
const moneyNeededForRebirthValueText = document.querySelector("#moneyNeededForRebirthValueText");
const moneyNeededForRebirthText = document.querySelector("#moneyNeededForRebirthText");
const rebirthValText = document.querySelector("#rebirthValText");

//Initialize buttons
mainButton.onclick = getClickMoney;

function getClickMoney(){
	money += Math.floor(buttonValue * buttonMultiplier);
	currencyText.innerText = money;
	console.log(money + " " + buttonMultiplier);
	if(money >= moneyNeededForRebirth)
	{
		mainButton.onclick = doRebirth;
		mainButton.innerText = "Rebirth";
	}
}
function upgradeButton(number){
	let currentUpgrade = buttonUpgrades[number];
	if(money >= currentUpgrade.cost)
	{
		switch(number){
			case 0:
				buttonValue += 1;
				break;
			case 1:
				buttonMultiplier += 1.00;
				break;
			case 2:
				buttonPassiveIncome += 1;
				break;
			case 3:
				buttonPassiveMultiplier += 1.00;
				break;
			default:
				console.log("There is no such upgrade.");
				break;
	    }
	    money-=currentUpgrade.cost;
	    if(!currentUpgrade.isOneTime)
		{
			currentUpgrade.cost *= 2;
		}
		else
		{
			console.log("Hide upgrade number " + number);
		}
	}
	else
	{
		console.log("No mony.");
	}
}

function doRebirth()
{
	//Reset values and calculate base income
	money = 0;
	totalMoney = 0;
	rebirths += 1;
	rebirthValText.innerText = rebirths;
	buttonValue = 1 + rebirths;
	moneyNeededForRebirth += Math.floor(moneyNeededForRebirth * 0.66);
	buttonMultiplier = 1.00 + rebirths * 0.2;
	buttonPassiveIncome = 0 + Math.floor(rebirths/2);
	buttonPassiveIncomeMultiplier = Math.floor(rebirths / 10);

	//Universe switch
	let lastUniverse = universeNumber;
	while(universeNumber==lastUniverse)
	{
		universeNumber = Math.floor(Math.random() * 38);
	}	
	console.log("Universe number: " + universeNumber);
	currencyNameText.innerText = currencyPossibleNames[universeNumber] + ": ";
	moneyNeededForRebirthText.innerText = currencyPossibleNames[universeNumber] + " needed for next rebirth: ";
	moneyNeededForRebirthValueText.innerText = moneyNeededForRebirth; //BUG: moneyNeededForRebirthValue dissapears after 1st rebirth.
	mainButton.innerText = buttonPossibleText[universeNumber];

	mainButton.onclick = getClickMoney;

	//Rebirth upgrades are applied here.
}