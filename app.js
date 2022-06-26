let output = document.querySelector(".output");
let calc = document.querySelector(".calculator");
let value;
let result;
calc.addEventListener("click",function(e) {
	if(e.target.id == "btn"){
		value = e.target.innerHTML;
		switch(value){
			case "C":
				output.innerHTML = "";
				break;
			case "+/-":
			case "%":
				break;
			case "/":
				output.innerHTML += "/";
				break;
			case "7":
				output.innerHTML += "7";
				break;
			case "8":
				output.innerHTML += "8";
				break;
			case "9":
				output.innerHTML += "9";
				break;
			case "*":
				output.innerHTML += "*";
				break;
			case "4":
				output.innerHTML += "4";
				break;
			case "5":
				output.innerHTML += "5";
				break;
			case "6":
				output.innerHTML += "6";
				break;
			case "-":
				output.innerHTML += "-";
				break;
			case "1":
				output.innerHTML += "1";
				break;
			case "2":
				output.innerHTML += "2";
				break;
			case "3":
				output.innerHTML += "3";
				break;
			case "+":
				output.innerHTML += "+";
				break;
			case "0":
				output.innerHTML += "0";
				break;
			case ".":
				output.innerHTML += ".";
				break;
			case "=":
				result = eval(output.innerHTML);
				output.innerHTML = result;
				break;
		}
	}
});