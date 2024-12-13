let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

/**1a resulução, modo antigo:
* 
*const varATemporario = varA;
*varA = varB;
*varB = varC;
*varC = varATemporario;
*
*console.log(varA, varB, varC);
*/

//2a resolução, modo novo, JavaScript resolve:
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);