const extendHex = (shortHex) => {
	
	const hex = shortHex.replace("#", "");

	const r = hex[0];
	const g = hex[1];
	const b = hex[2];
	
	const fullHex = `#${r}${r}${g}${g}${b}${b}`;
	
	return fullHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
