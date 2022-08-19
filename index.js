// code your solution here
let superbowlWin = winYearDated => {
	let winYear = winYearDated.find( bowl => {  return bowl.result === "W" })
	if (winYear){ 
		return winYear.year
	} else {
		return undefined
	}
}