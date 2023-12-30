let money = 0;
let totalMoney = 0;
let rebirths = 0;
let currencyName = "money";

let buttonValue = 1;
let buttonMultiplier = 1.00;
let buttonPassiveIncome = 0;
let buttonPassiveIncomeMultiplier = 1;

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

let currencyPossibleNames = ["money", "mony", "dolaridoos", "chedah", "dabloons", "gold", "amethysts", "diamonds", "copper", "silver", 
							 "cookies", "drams of water", "coal", "kilowats", "soap", "paperclips", "metres of real estate", "salt",
							 "cinnamon", "sugar", "organs", "blood", "string", "distance traveled", "xp", "magic", "black matter",
							 "planets", "germs", "tennis balls", "code", "humans", "titanium", "houses", "scrap", "freinds", "love",
							 "bananas", "cucumbers", "glizzies", "subscribers", "thingamajigs", "dirt", "bottle caps", "golden rings"];

const mainButton = document.querySelector("#mainButton");
const currencyText = document.querySelector("#currencyText");
const currencyNameText = document.querySelector("#currencyNameText");

//Initialize buttons
mainButton.onclick = getClickMoney;

function getClickMoney(){
	money += floor(buttonValue * buttonMultiplier);
	currencyText.innerText = money;
	console.log(money + " " + buttonMultiplier);
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

function Rebirth()
{
	money = 0;
	totalMoney = 0;
	rebirths += 1;
	currencyName = "money";
	buttonValue = 1 + rebirths;
	buttonMultiplier = 1.00 + floor(rebirths / 10);
	buttonPassiveIncome = 0 + floor(rebirths/2);
	buttonPassiveIncomeMultiplier = floor(rebirths / 10);

	//Rebirth upgrades are applied here.
}